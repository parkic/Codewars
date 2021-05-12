function positiveSum(arr) {
    var result = 0;
    arr.filter(x => x>0).map(x=> result += x)
    return result;
}