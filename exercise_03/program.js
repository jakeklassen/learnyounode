'use strict';

let fs = require("fs");
let filename = process.argv[2];

let contents = fs.readFileSync(filename, { encoding: 'utf8' });
// Subtract one from the length because when a file contains no newlines, the
// array length would still be 1.
console.log(contents.split("\n").length - 1);