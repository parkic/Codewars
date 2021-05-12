function parse( data ){
  let counter = 0;
  let output = []
  
  for(let el of data.split('')){
    switch(el){
        case 'i':
          counter++;
          break;
        case 'd':
          counter--;
          break;
        case 's':
          counter *= counter;
          break;
        case 'o':
          output.push(counter);
          break;
    }
  }
  return output
}
