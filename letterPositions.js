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

const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') { 
      
      if (results[char]) {
        results[char].push(i); 
      } else {
        results[char] = [i]; 
      }
    }
  }
  return results;
};

// const index = assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(index);

assertArraysEqual(letterPositions("hello").e, [1]); 