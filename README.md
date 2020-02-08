# Xslt Tools for Visual Studio Code

This extension for Visual Studio Code allows you to run XSLT transformations with the editor. It utilizes the open source [`xslt-processor`](https://github.com/fiduswriter/xslt-processor) JavaScript module from [Fidus Writer](https://www.fiduswriter.org).

## Installation

You can install this extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=szul.vscode-xslt).

## Usage

While editing an XML file, hit `Ctrl + Shift + p` to bring up the command palette, and type XSLT in the palette window. Select "Run XSLT Transformation" from the options. You will then be presented with a dialog to pick an XSLT file. Choose the XSLT file and the transformation will run. Two windows will then open to the side: One showing the transformed text and one attempting to display the browser rendering of that transformation (in the case of HTML output).

## Notes

This extension is barebones, and just performs transformations. There's a lot more it could be built out to do. Feel free to request functionality via [GitHub issues](https://github.com/szul/vscode-xslt/issues).
