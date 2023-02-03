function dropWhile(array, identity) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  let part_array = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof identity === 'function' && !identity(array[i])) {
      part_array[index++] = array[i];
    }
    if (identity instanceof Array) {
      if (!JSON.stringify(array[i]).includes(identity[0]) ||
        !JSON.stringify(array[i]).includes(identity[1])) {
        part_array[index++] = array[i];
      }
      continue;
    }
    if (typeof identity === 'object' || typeof identity === 'string') {
      if (JSON.stringify(identity) !== JSON.stringify(array[i])) {
        part_array[index++] = array[i];
      }
    }
  }
  return part_array;
}

module.exports = dropWhile;
