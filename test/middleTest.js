const { assert } = require("chai");
const middle = require("../middle");
// const assertArraysEqual = require("../assertArraysEqual");

describe("#middle", () => {
  it("retrun Empty array",() =>{
    assert.deepEqual(middle([1,2]), []);
  });
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns '8','9' for [1,2,5,8,9,7,6,8]", () => {
    assert.deepEqual(middle([1,2,5,8,9,7,6,8]), [8 , 9]);
  });
  it("retrun 'Hello' for ['1','Hello', 'World']",() =>{
    assert.deepEqual(middle([1, "Hello", "World"]), ['Hello']);
  });
});

// console.log(middle([1,2]));
// console.log(middle([1,2,3]));
// console.log(middle([1,2,5,8,9,7,6,8]));
// console.log(middle([1,"Hello","world"]));