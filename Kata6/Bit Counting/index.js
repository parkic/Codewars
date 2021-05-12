var countBits = function(n) {
    var result = n.toString(2).match(/1/gi)
    
    return result == null ? 0 : result.length
};