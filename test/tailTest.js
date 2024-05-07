const assert = require('chai').assert;
const tail = require("../tail");
//const assertEqual = require("../assertEqual");


describe("#tail", () => {
  it("returns an array excluding the first element", () => {
    const result1 = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result1.length, 2); 
    assert.deepEqual(result1[0], "Lighthouse"); 
    assert.deepEqual(result1[1], "Labs"); 
  });

  it("returns an array excluding for an element", () => {
    const result2 = tail([1]);
    assert.deepEqual(result2.length, 0); 
  });
  it("returns an array excluding for empty element", () => {
    const result3 = tail([]);
    assert.deepEqual(result3.length, 0); 
  });

});

// const result1 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result1.length, 2); 
// assertEqual(result1[0], "Lighthouse"); 
// assertEqual(result1[2], "Labs"); 

// const result2 = tail([1]);
// assertEqual(result2.length, 0); 

// const result3 = tail([]);
// assertEqual(result3.length, 0);
