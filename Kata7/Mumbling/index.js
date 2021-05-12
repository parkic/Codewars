function accum(s) {
    return s.split('').map((x, idx) => 
        x = x.toUpperCase() + x.toLowerCase().repeat(idx) + '-'
    ).join('').slice(0, -1)
}