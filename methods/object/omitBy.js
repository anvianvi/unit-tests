function omitBy(object, func) {

  if (!(typeof object === 'object' &&
    !Array.isArray(object) &&
    object !== null)) { throw new TypeError('First argument must be an object'); }
  if (!func) return object;
  const target = {};
  for (const key in object) {
    if (func(object[key])) {
      target[key] = object[key];
    }
  }
  return target;
}

module.exports = omitBy;
