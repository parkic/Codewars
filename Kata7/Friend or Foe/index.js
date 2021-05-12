function friend(friends){
  return friends.reduce((res, current)=>{
    current.length === 4 ? res.push(current) : res.push()
    return res
  }, [])
}