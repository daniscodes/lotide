const flatten = (array) => {
let output = [];
for(let i = 0; i  < array.length; i++){
  if (Array.isArray(array[i])){
    for (const each of array[i]){
      output.push(each)
    }
} else {
  output.push(array[i])
}
}
return output
};

console.log(flatten([1, 2, [3, 4], 5, [6]]))