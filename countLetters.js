const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentance) {
 
  let counts = {};

  for(const word of sentance){
    if(word !== " "){
    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
    }
  }
    return counts;

};
const result = countLetters("lighthouse in the house");
console.log(result);