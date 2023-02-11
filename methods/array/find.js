function find(collection, predicate = value => value, fromIndex = 0) {
  if (!Array.isArray(collection) && typeof collection !== 'object') {
    throw new TypeError('First argument must be an array or an object');
  }

  if (Array.isArray(predicate)) {
    const [prop, value] = predicate;
    predicate = (item) => item[prop] === value;
  } else if (typeof predicate === 'object') {
    const props = predicate;
    predicate = (item) => {
      for (const prop in props) {
        if (item[prop] !== props[prop]) {
          return false;
        }
      }
      return true;
    }
  } else if (typeof predicate !== 'function') {
    const prop = predicate;
    predicate = (item) => prop in item;
  }

  for (let i = 0; i < collection.length; i++) {
    const value = collection[i];
    if (predicate(value, i, collection)) {
      return value;
    }
  }
  return undefined;
}

module.exports = find;
