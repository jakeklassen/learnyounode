'use strict';

// FILTERED LS

const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(dir, (err, files) => {
  if (err) throw err;

  let found = files.filter((file) => {
    return path.extname(file) === ext;
  });
  
  found.forEach((file) => {
    console.log(file);
  });
});