function findShort(s){
    var result = s.split(' ').reduce((short, current) => {
        return current.length < short.length ? current : short;
    }, s[0])
}