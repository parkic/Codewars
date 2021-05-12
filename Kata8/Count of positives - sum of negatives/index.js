function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  
  input.map( num => num > 0 ? positive++ : negative += num)
  
  return [positive, negative]
}
