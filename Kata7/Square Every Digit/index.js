function squareDigits(num){
   return parseInt(num.toString().split('').map(x => x*x).join(''));
}