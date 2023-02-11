function zip(...arrays) {
  let maxLength = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (!(arrays[i] instanceof Array)) {
      throw new TypeError('All arguments must be arrays');
    }
    maxLength = Math.max(maxLength, arrays[i].length);
  }

  let result = [];
  let resultIndex = 0;
  for (let i = 0; i < maxLength; i++) {
    let row = [];
    let rowIndex = 0;
    for (let j = 0; j < arrays.length; j++) {
      row[rowIndex++] = arrays[j][i] || undefined;
    }
    result[resultIndex++] = row;
  }
  return result;
}

module.exports = zip;
