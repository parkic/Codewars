function meeting(s) {
  return s.split(';')
          .map( elem => elem.toUpperCase().split(':') )
          .sort( (a,b) => a[1] > b[1] ? 1 : 
                          a[1] < b[1] ? -1 :
                          a[0] > b[0] ? 1 :
                          a[0] < b[0] ? -1 : 0 
          )
          .map(elem => `(${elem[1]}, ${elem[0]})`)
          .join('')
}