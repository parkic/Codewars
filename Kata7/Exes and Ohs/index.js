function XO(str) {
    return str.replace(/o/gi, '').length == str.replace(/x/gi, '').length
}