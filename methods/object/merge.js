function merge(firstObject, secondObject) {
  if (!(typeof firstObject === 'object' &&
    !Array.isArray(firstObject) &&
    firstObject !== null)) { throw new TypeError('First argument must be an object'); }
  else if (!(typeof secondObject === 'object' &&
    !Array.isArray(secondObject) &&
    secondObject !== null)) { throw new TypeError('Second argument must be an object'); }

  const firstObjectKeys = Object.keys(firstObject);
  const secondObjectKeys = Object.keys(secondObject);

  for (let i = 0; i < secondObjectKeys.length; i++) {
    const key = secondObjectKeys[i];
    if (firstObjectKeys.includes(key)) {
      if (Array.isArray(firstObject[key]) && Array.isArray(secondObject[key])) {
        for (let j = 0; j < secondObject[key].length; j++) {
          if (typeof firstObject[key][j] === 'object' && typeof secondObject[key][j] === 'object') {
            firstObject[key][j] = merge(firstObject[key][j], secondObject[key][j]);
          } else {
            firstObject[key][j] = secondObject[key][j];
          }
        }
      } else if (typeof firstObject[key] === 'object' && typeof secondObject[key] === 'object') {
        firstObject[key] = merge(firstObject[key], secondObject[key]);
      } else {
        firstObject[key] = secondObject[key];
      }
    } else {
      firstObject[key] = secondObject[key];
    }
  }

  return firstObject;

}

module.exports = merge;
