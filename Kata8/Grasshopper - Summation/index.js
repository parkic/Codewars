var summation = function (num) {
    var result = 0;
    while(num>0){
      result += num;
      num--;
    }
    return result;
}