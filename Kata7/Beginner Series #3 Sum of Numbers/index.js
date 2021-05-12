function getSum( a,b )
{
  let min = a<b ? a : b;
  let max = a>b ? a : b;
  let sum = 0;
  for(let i=min; i<=max; i++){
    sum += i;
  }
  return sum;  
}