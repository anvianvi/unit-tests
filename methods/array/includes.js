function includes(collection, value, fromIndex = 0) {
  if (typeof collection !== 'string' && !(collection instanceof Object)) {
    throw new TypeError('collection must be a string, array, or object');
  }
  if (typeof fromIndex !== 'number' || isNaN(fromIndex)) {
    throw new TypeError('fromIndex argument must be a number');
  }

  fromIndex = parseInt(fromIndex);

  if (typeof collection === 'string') {
    let start = fromIndex >= 0 ? fromIndex : collection.length + fromIndex;
    return collection.indexOf(value, start) !== -1;
  }

  let values = Object.values(collection);
  for (let i = fromIndex; i < values.length; i++) {
    if (Object.is(values[i], value)) {
      return true;
    }
  }
  return false;
}

module.exports = includes;