function drop(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  if (isNaN(n)) {
    throw new TypeError('Second argument must be a integer');
  }
  const dropped = [];
  let droppedIndex = 0;
  for (let i = Math.max(0, parseInt(n)); i < array.length; i++) {
    dropped[droppedIndex++] = array[i];
  }
  return dropped;
}

module.exports = drop;
