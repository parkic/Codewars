function toWeirdCase(string){
    return string.split(' ').map(word => {
      return word.split('').map((letter,idx) => idx%2 == 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')
    }).join(' ')
  }
  