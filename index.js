const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual =require('./assertEqual');
const assertArraysEqual =require('./assertArraysEqual');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual
};
console.log(head([1, 2, 3])); 