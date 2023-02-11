function omit(object, paths) {

  if (!(typeof object === 'object' &&
  !Array.isArray(object) &&
  object !== null)) { throw new TypeError('First argument must be an object'); }

  const result = object;
  for (const prop in object) {
    for (const key in paths) {
      if (paths[key] === prop) {
        result[prop] = object[prop];
        delete result[prop];
      }
    }
  }
  return result;
}

module.exports = omit;
