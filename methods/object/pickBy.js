const pickBy = (object, Function) => {
  if (!(typeof object === 'object' &&
    !Array.isArray(object) &&
    object !== null)) { throw new TypeError('First argument must be an object'); }
  else if (!Function) { return {} }

  const result = {};
  for (const key in object) {
    if (Function(object[key])) {
      result[key] = object[key];
    }
  }
  return result;
};

module.exports = pickBy;
