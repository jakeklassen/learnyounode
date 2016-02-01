'use strict';

// MAKE IT MODULAR
//
// Filter files using a modular approach.

const dir = process.argv[2];
const ext = '.' + process.argv[3];
const filter = require("./filter");

filter(dir, ext, (err, files) => {
  if (err) throw err;
  
  files.forEach((file) => {
    console.log(file);
  });
});