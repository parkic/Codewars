function findOutlier(integers){
    var p =0;
    var n =0;
    
    integers.slice(0, 3).map(x => x%2 == 0 ? p++ : n++)
    
    return p < 2 ? integers.find(function(x){ return x%2 == 0}) : integers.find(function(x){return x%2 !==0})
}