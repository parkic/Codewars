function persistence(num) {
    var count = 0;
    while(num > 9){
      var temp = 1;
      for(var i=0; i<num.toString().length; i++){
        temp *= parseInt(num.toString()[i]);
      }
      num = temp;
      count++;
      continue;
    }
    return count;
}