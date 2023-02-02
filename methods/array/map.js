function map(list, callback) {
  if (!Array.isArray(list) && typeof list !== 'object') {
    throw new TypeError('First argument must be an array or object');
  }

  if (typeof callback !== 'function' && typeof callback !== 'string') {
    throw new Error(`Callback must be a function or string`);
  }

  if (typeof callback === 'string') {
    return Object.values(list).map(item => item[callback]);
  }

  return Object.values(list).map(callback);
};

module.exports = map;

