
function compact(array) {
  if (!Array.isArray(array)) {
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
