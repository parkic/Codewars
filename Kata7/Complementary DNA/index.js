function DNAStrand(dna){
  let res = ""
  for(let el of dna){
    res += el == "A" ? "T" : el == "T" ? "A" : el == "C" ? "G" : el == "G" ? "C" : ""
  }
  return res;
}