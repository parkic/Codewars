function findUniq(arr) {
    let sortedArr = arr.sort();
    return sortedArr[0]==sortedArr[1] ? sortedArr[arr.length-1] : sortedArr[0]
}
