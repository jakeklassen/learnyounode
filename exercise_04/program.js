'use strict';

// MY FIRST ASYNC I/O!

const fs = require("fs");
const filename = process.argv[2];

// Async count newlines
fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    throw err;
  }
  
  // Subtract one from the length because when a file contains no newlines, the
  // array length would still be 1.
  console.log(data.split("\n").length - 1);
});