function generateName(){
    var result = '';
    for(var i=0; i<6; i++){
        var slovo = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        result += slovo;
    }
    
    if(photoManager.nameExists(result)){
        generateName()
    }else{
        return result;
    }
}