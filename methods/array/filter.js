function filter(array, Function) {
  if (!Array.isArray(array)) {
    throw new TypeError('First argument must be an array');
  }
  if (typeof Function !== 'function') {
    throw new TypeError('Second argument must be a function');
  }
  let index = 0;
  const result = [];
  for (let i = 0; array.length > i; i += 1) {
    if (Function(array[i])) {
      result[index] = array[i];
      index += 1;
    }
  }
  return result;
};

module.exports = filter;
