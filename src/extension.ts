'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';
import { xmlParse, xsltProcess } from 'xslt-processor';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "xslt-transform" is now active!');
    const disposable = vscode.commands.registerCommand('extension.runXSLTTransform', async () => {
        const xsltFile = await vscode.window.showOpenDialog(
            {
                canSelectFiles: true,
                canSelectFolders: false,
                canSelectMany: false,
                filters: {
                    'XSLT' : ['xsl','xslt']
                }
            }
        );
        if(vscode.window.activeTextEditor !== undefined && xsltFile !== undefined) {
            const xml = vscode.window.activeTextEditor.document.getText();
            const xslt = fs.readFileSync(xsltFile[0].fsPath).toString();
            try {
                const rXml = xmlParse(xml);
                const rXslt = xmlParse(xslt);
                const result = xsltProcess(rXml, rXslt);
                const textDoc = await vscode.workspace.openTextDocument(
                    {
                        content: result,
                        language: 'xml'
                    }
                );
                
                vscode.window.showTextDocument(textDoc, vscode.ViewColumn.Beside);

                const web = vscode.window.createWebviewPanel('transformPreview', 'XSLT Results', vscode.ViewColumn.Beside, { });
                web.webview.html = result;
                
            }
            catch(e) {
                vscode.window.showErrorMessage(e);
            }
        }
        else {
            vscode.window.showErrorMessage('An error occurred while accessing the XML and/or XSLT source files. Please be sure the active window is XML, and you have selected an appropriate XSLT file.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}
