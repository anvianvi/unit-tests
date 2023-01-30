function take(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError('Second argument must be a integer');
  }
  if (!Array.isArray(array) || !array.length) {
    return [];
  }

  return array.slice(0, Math.max(0, Math.min(parseInt(n), array.length)));

}

module.exports = take;
