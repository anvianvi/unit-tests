function includes(collection, value, fromIndex = 0) {
  if (typeof collection !== 'string' && !Array.isArray(collection) && typeof collection !== 'object') {
    throw new TypeError('collection must be a string, array, or object');
  }
  if (typeof fromIndex !== 'number' || isNaN(fromIndex)) {
    throw new TypeError('fromIndex argument must be a number');
  }

  fromIndex = parseInt(fromIndex);

  if (typeof collection === 'string') {
    return collection.indexOf(value, fromIndex) !== -1;
  }

  return Object.values(collection).slice(fromIndex).some((item) => Object.is(item, value));
}

module.exports = includes;