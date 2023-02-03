function pick(object, paths) {

  if (!(typeof object === 'object' &&
    !Array.isArray(object) &&
    object !== null)) { throw new TypeError('First argument must be an object'); }

  const obj = {};
  for (const prop in object) {
    for (const key of paths) {
      if (key === prop) {
        obj[prop] = object[prop]
      }
    }
  }
  return obj;
}
module.exports = pick;