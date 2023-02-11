function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError('Second argument must be a positive integer');
  }
  const chunked = [];
  let chunkIndex = 0;
  let chunkElementIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (!chunked[chunkIndex]) {
      chunked[chunkIndex] = [];
      chunkElementIndex = 0;
    }
    chunked[chunkIndex][chunkElementIndex++] = array[i];
    if (chunkElementIndex === size) {
      chunkIndex++;
    }
  }
  return chunked;
}

module.exports = chunk;
