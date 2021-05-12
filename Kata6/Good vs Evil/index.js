const goodTm = {
  0: 1,
  1: 2,
  2: 3,
  3: 3,
  4: 4,
  5: 10
}
const badTm = { 
  0: 1,
  1: 2,
  2: 2,
  3: 2,
  4: 3,
  5: 5,
  6: 10
}

function goodVsEvil(good, evil){
  let goodStr = good.split(' ').reduce((acc, cur, idx) => acc + goodTm[idx]*cur, 0)
  let evilStr = evil.split(' ').reduce((acc, cur, idx) => acc + badTm[idx]*cur, 0)

  return goodStr > evilStr ? "Battle Result: Good triumphs over Evil" : 
         goodStr < evilStr ? "Battle Result: Evil eradicates all trace of Good" :
                             "Battle Result: No victor on this battle field" 
}
