
function compact(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Argument must be an array');
  }
  return array.filter(element =>
    element >= 1
  );
}

module.exports = compact;
