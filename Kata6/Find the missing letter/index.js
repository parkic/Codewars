function findMissingLetter(array){
  let counter = 0;
  let min = array[0].charCodeAt(0)
  let max = array[array.length-1].charCodeAt(0)
  
  while (counter<max-min){
    if(String.fromCharCode(min+counter) !== array[counter]){
      return String.fromCharCode(min+counter++)
    }
    counter++
  }
}