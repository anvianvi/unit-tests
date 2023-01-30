function drop(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError('Second argument must be a integer');
  }
  return array.slice(Math.max(0, parseInt(n)));
}

module.exports = drop;
