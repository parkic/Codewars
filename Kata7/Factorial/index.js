function factorial(n)
{
  if(n<0 || n > 12){
    throw new RangeError()
  }
  let sum = 1;
  while(n>0){
    sum *= n;
    n--
  }
  return sum
}