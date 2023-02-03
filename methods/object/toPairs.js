function toPairs(object) {
  if (!(typeof object === 'object' &&
    !Array.isArray(object) &&
    object !== null)) { throw new TypeError('First argument must be an object'); }

  return Object.entries(object);
}


module.exports = toPairs;
