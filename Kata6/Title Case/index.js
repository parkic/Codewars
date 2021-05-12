function titleCase(title, minorWords) {
  if(minorWords){
    minorWords = minorWords.toLowerCase().split(' ')
    
    return title.toLowerCase()
                .split(' ')
                .map( (word, idx) => {
                    if(idx === 0) { return titleWord(word) }
                    return minorWords.indexOf(word) === -1 ? titleWord(word) : word  
                })
                .join(' ')
  }
  else{
    return title.split(' ').map(word => titleWord(word)).join(' ')
  }
}

function titleWord(word){
  return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase()
}