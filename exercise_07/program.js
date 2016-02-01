'use strict';

// HTTP CLIENT
//
// Handle HTTP GET request and output response.

const http = require("http");
const url = process.argv[2];

http.get(url, (res) => {
  res.setEncoding('utf8');

  // res is a node steam.
  // Handle events
  res.on('data', (data) => {
    console.log(data);
  });
  
  res.on('error', (err) => {
    throw err;
  });
  
  res.on('end', () => {
    // done
  });
});