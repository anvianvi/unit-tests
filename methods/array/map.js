function map(array, callback) {
  if (!Array.isArray(array) && typeof array !== 'object') {
    throw new TypeError('First argument must be an array or object');
  }

  if (typeof callback !== 'function' && typeof callback !== 'string') {
    throw new Error(`Callback must be a function or string`);
  }

  const result = [];
  const keys = Object.keys(array);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let value;
    if (typeof callback === 'string') {
      value = array[key][callback];
    } else {
      value = callback(array[key]);
    }
    result[result.length] = value;
  }
  return result;
};

module.exports = map;
