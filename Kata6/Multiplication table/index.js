multiplicationTable = function(size) {
  let res = [];
  let rowCount = 1;
  let colCount = 1;

  for(let i=0; i<size; i++){
    let row = [];

    for(let j=0; j<size; j++){
      row.push(rowCount * colCount++)
    }
    colCount = 1
    rowCount++
    res.push(row)
  }
  return res
}
