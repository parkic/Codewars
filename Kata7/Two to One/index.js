function longest(s1, s2) {  
  return (s1+s2).split("").reduce((res, current) => {
        res.indexOf(current) === -1 ? res.push(current) : res.push()
        return res;
      }, []).sort().join("")
}