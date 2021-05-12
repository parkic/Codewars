function passed (list) { 
    var passed = [];
    var sum=0;

    for(var i=0; i < list.length; i++){
        if(list[i] < 19){
            passed.push(list[i])
        };
    }    
    if(passed.length == 0){
        return 'No pass scores registered.'
    }
    
    passed.map(x => sum += x)
    
    return Math.round(sum/passed.length);
}