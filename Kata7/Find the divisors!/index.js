function divisors(integer) {
  let res = [];
  for(let i=2; i<integer; i++){
    integer / i === Math.ceil(integer / i) ? res.push(i) : res.push() 
  }
  return res.length === 0 ? `${integer} is prime` : res
  
};