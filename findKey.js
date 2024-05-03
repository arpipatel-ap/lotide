const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
function findKey(object, callback){
  for(const key in object){
    if (callback(object[key]) ) {
      return key;
    }
  }
  return undefined;
}

  const testKey = () => {
    const restaurants = {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
    }

  assertEqual(findKey(restaurants, (x) => x.stars === 2), "noma");

  assertEqual(findKey(restaurants, (x) => x.stars === 6), "Blue Hill");

  assertEqual(findKey(restaurants, (x) => x.stars === 5), undefined);
};
testKey();
