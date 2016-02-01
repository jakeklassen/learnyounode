'use strict';

// HTTP UPPERCASERER (Exercise 12 of 13)
//
// Write an HTTP server that receives only POST requests and converts  
// incoming POST body characters to upper-case and returns it to the client.  
//
// Your server should listen on the port provided by the first argument to  
// your program.

const http = require("http");
// Used to achieve Array#map like functionality with streams.
const map = require('through2-map');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  // Handle POST only
  if (req.method === 'POST') {
    // Upper case incoming string data
    req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
});

server.listen(port);