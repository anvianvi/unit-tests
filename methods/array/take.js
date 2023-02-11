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

  let result = [];
  let resultIndex = 0;
  n = parseInt(n);
  for (let i = 0; i < Math.min(array.length, n); i++) {
    result[resultIndex++] = array[i];
  }
  return result;

}

module.exports = take;
