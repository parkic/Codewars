function digPow(n, p){
  let currentVal = n.toString().split('').reduce((acc, curr, idx) => {
    return acc + Math.pow(curr, p+idx) 
  }, 0) / n
  return currentVal % 1 === 0 ? currentVal : -1
}