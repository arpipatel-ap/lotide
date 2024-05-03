const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; 
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Arrays are equal");
  }else{
    console.log("Arrays are not equal");
  }
  
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// Test cases
const words = ["ground", "control", "to", "major", "tom"];


const capitalizedWords = map(words, word => word.toUpperCase());
assertArraysEqual(capitalizedWords, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const excitedWords = map(words, word => word + "!");
assertArraysEqual(excitedWords, ["ground!", "control!", "to!", "major!", "tom!"]);


const wordLengths = map(words, word => word.length);
assertArraysEqual(wordLengths, [6, 7, 2, 5, 3]);
