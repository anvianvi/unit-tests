function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError('Second argument must be a positive integer');
  }
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
}
module.exports = chunk;