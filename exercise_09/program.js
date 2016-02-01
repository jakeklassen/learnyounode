'use strict';

// JUGGLING ASYNC (Exercise 9 of 13)  
// 
// This problem is the same as the previous problem (HTTP COLLECT) in that  
// you need to use http.get(). However, this time you will be provided with  
// three URLs as the first three command-line arguments.  
// 
// You must collect the complete content provided to you by each of the URLs  
// and print it to the console (stdout). You don't need to print out the  
// length, just the data as a String; one line per URL. The catch is that you  
// must print them out in the same order as the URLs are provided to you as  
// command-line arguments.

const async = require("async");
const http = require("http");
let urls = process.argv.splice(2);

// Promise based get
function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let buffer = '';

      res.on('error', (err) => {
        return reject(err);
      });
      
      res.on('data', (data) => {
        buffer += data;
      });
      
      res.on('end', () => {
        return resolve(buffer);
      });
    });
  });
}

// Fire off async tasks
async.series([
  (cb) => {
    get(urls[0])
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    });
  },
  
  (cb) => {
    get(urls[1])
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    });
  },
  
  (cb) => {
    get(urls[2])
    .then((result) => {
      cb(null, result);
    })
    .catch((err) => {
      cb(err);
    });
  }
], (err, results) => {
  if (err) throw err;
  
  // Log results
  results.forEach((result) => {
    console.log(result.toString());
  });
});