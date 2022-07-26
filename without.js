const without = function(source, itemsToRemove){
  let output = [];

  for(const i of source){
    if(!itemsToRemove.includes(i)){
      output.push(i)
    }
  }
}
