
exports.min = function min (array) {
   return (typeof array == 'undefined') ? 0 : (array.length == 0 ? 0 : array.sort( (a, b) => a - b )[0]);
}

exports.max = function max (array) {
  return (typeof array == 'undefined') ? 0 : (array.length == 0 ? 0 : array.sort( (a, b) => a - b ).reverse()[0]);
}

exports.avg = function avg (array) {
  return (typeof array == 'undefined') ? 0 : (array.length == 0 ? 0 : array.reduce((s, c) => s + c, 0)/array.length);
}
