"use strict";
require('shelljs/global');

const shell      = require('shelljs'),
      path       = require('path'),
      fs         = require('fs'),
      releaseDir = './release',
      sourceDir  = './src',
      file       = filename => {
          return path.resolve(sourceDir, filename)
      };
var sourcePdf  = './node_modules/pdfjs-dist';

if(shell.exec(`if [ -d "./node_modules" ]; then
 echo exists
fi`).stdout.length === 0) {
    sourcePdf = "../pdfjs-dist";
};

shell.mkdir("release");
shell.cp("-R", path.resolve("src", "images"), releaseDir);
shell.cp(path.resolve(sourceDir, "index.html"), releaseDir);
shell.cp(path.resolve(sourceDir, "loader.css"), releaseDir);
shell.cp(path.resolve(sourceDir, "compatibility.js"), releaseDir);
shell.cp(path.resolve(sourceDir, "pdf.js"), releaseDir);
shell.cp(path.resolve(sourceDir, "ui_utils.js"), releaseDir);
shell.cp(path.resolve(sourceDir, "text_layer_builder.js"), releaseDir);
shell.cp(path.resolve(sourceDir, "pdfjsversion.js"), releaseDir);
shell.cp(path.resolve(sourceDir, "pdf.worker.js"), releaseDir);

console.info('Build Ok');
