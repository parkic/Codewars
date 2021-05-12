function duplicateEncode(word){
  let obj = {}
  for (let letter of word.toLowerCase()){
      obj[letter] ? obj[letter]++ : obj[letter] = 1
  }

  return word.toLowerCase().split('').map(letter => obj[letter]>1 ? ')' : '(' ).join('')
}
  