const eqArrays = function (arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true
  } else return false
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} ===  ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
  }

};

module.exports = assertArraysEqual