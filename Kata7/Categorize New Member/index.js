function openOrSenior(data){
  let resultList = [];
  for(let i=0; i<data.length; i++){
    if(data[i][0] >= 55 && data[i][1] > 7){
      resultList.push("Senior");
    }else{
      resultList.push("Open")
    }
  }
  return resultList
}