String.prototype.toJadenCase = function () {
    return this.valueOf().split(' ').map(x => x.replace(x[0], x[0].toUpperCase())).join(' ')
};