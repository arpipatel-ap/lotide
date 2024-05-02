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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if(keys1.length !== keys2.length){
      return false;
    }
    for (const key of keys1){
      const value1 = object1[key];
      const value2 = object2[key];
    
      if (Array.isArray(value1) && Array.isArray(value2)) {
        if (!eqArrays(value1, value2)) {
          return false;
        }

    if (object1[key] !== object2[key]) {
           return false;
    }
  }
  return true;
};
};




const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = 
{ size: "medium", 
color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); 
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); 