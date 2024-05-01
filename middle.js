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

const middle = function(array){
    if(array.length <= 2){
        return [];
    }
    
    const middleIndex = Math.floor(array.length/ 2);

    if(array.length % 2 !== 0){
      return [array[middleIndex]];
    }
    else{
      return [array[middleIndex- 1], array[middleIndex]]
    }
}

console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,5,8,9,7,6,8]));
console.log(middle([1,"Hello","world"]));
