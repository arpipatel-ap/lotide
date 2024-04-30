const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to return the first item in the array
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

// Test cases
assertEqual(head([5, 6, 7]), 5); // Should pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Should pass
assertEqual(head([]), undefined); // Should pass
assertEqual(head([42]), 42); // Should pass
