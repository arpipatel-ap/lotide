
const assertEqual = require("./assertEqual");

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

// // Test cases
// const result1 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result1.length, 2); 
// assertEqual(result1[0], "Lighthouse"); 
// assertEqual(result1[2], "Labs"); 

// const result2 = tail([1]);
// assertEqual(result2.length, 0); 

// const result3 = tail([]);
// assertEqual(result3.length, 0);

module.exports = tail;