const tail = require("../tail");
const assertEqual = require("../assertEqual");

const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); 
assertEqual(result1[0], "Lighthouse"); 
assertEqual(result1[2], "Labs"); 

const result2 = tail([1]);
assertEqual(result2.length, 0); 

const result3 = tail([]);
assertEqual(result3.length, 0);
