function createPhoneNumber(numbers){
    var list = numbers.map(x => x.toString())
    var first = list[0] + list[1] + list[2];
    var second = list[3] + list[4] + list[5];
    var third = list[6] + list[7] + list[8] + list[9];
    
    var result = "(" + first + ") " + second + '-' + third;
    
    return result;
}