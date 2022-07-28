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

const letterPositions = function(sentence) {
  let output = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!output[sentence[i]]) {
        output[sentence[i]] = [];
        output[sentence[i]].push(i);
      } else {
        output[sentence[i]].push(i);
      }
    }
  } return output;
};
const x = letterPositions("hello lhl");
console.log(x);
assertArraysEqual(letterPositions("hello").e, [1]);