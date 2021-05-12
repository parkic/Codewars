function findEvenIndex(arr){
  for (let [idx, num] of arr.entries()){
    if( arr.slice(0,idx).reduce((accum, current) => accum + current, 0) === 
        arr.slice(idx+1, arr.length).reduce((accum, current) => accum + current, 0) ){
    
    return idx
    }
  }
  return -1
}