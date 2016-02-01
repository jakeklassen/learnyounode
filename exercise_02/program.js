'use strict';

let args = process.argv.slice(2);

console.log(args.reduce(function (prev, curr) {
  return Number(prev) + Number(curr);
}));