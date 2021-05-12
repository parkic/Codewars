function squareSum(numbers){
    var sum = 0;
    numbers.forEach(x => {
      sum += x*x;
    })
    return sum;
}