'use strict'

var fs = require('fs');
var oldFile = process.argv[2].toString();
var bitmap = fs.readFileSync(oldFile);

var displayBMPProps = require('./lib/readFile');
var randomize = require('./lib/randomize');

displayBMPProps(bitmap);

randomize(bitmap, oldFile);









