'use strict';

const fs = require("fs");
const path = require("path");

// Filter files in a directory by extension.
// Executes callback with list of files found.
module.exports = function filter(dir, ext, cb) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return cb(err);
    }
    
    let found = files.filter((file) => {
      return path.extname(file).endsWith(ext);
    });
    
    return cb(null, found);
  });
};