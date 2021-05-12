function toCamelCase(str){
    var reci = str.split('-').join(',').split('_').join(',').split(',');
    var result = reci[0];
    
    for(let i=1; i<reci.length; i++){
        for(let j=0; j<reci[i].length; j++){
            result += j==0 ? reci[i][j].toUpperCase() : reci[i][j]
        }
    }
    return result;
}