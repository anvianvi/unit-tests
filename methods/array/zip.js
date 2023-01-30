function zip(...arrays) {
  arrays.forEach(array => {
    if (!Array.isArray(array)) {
      throw new TypeError('All arguments must be arrays');
    }
  });

  const maxLength = Math.max(...arrays.map(array => array.length));
  return Array.from({ length: maxLength }, (_, i) =>
    arrays.map(array => array[i] || undefined)
  );
};

module.exports = zip;
