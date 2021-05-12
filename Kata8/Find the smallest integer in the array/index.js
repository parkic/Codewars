class SmallestIntegerFinder {
    findSmallestInt(args) {
      var min = args[0];
      for(var i=0; i<args.length; i++){
        if(args[i] < min){
          min = args[i];
        }
      }
      return min;
    }
}

/*      BONUS
https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
}

*/