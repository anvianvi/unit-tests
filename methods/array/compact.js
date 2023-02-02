
function compact(array) {
  if (!(array instanceof Array)) {
    throw new TypeError('Argument must be an array');
  }
  const compacted = [];
  let compactedIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 1) {
      compacted[compactedIndex++] = array[i];
    }
  }
  return compacted;
}

module.exports = compact;
