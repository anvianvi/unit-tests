const chunk = require('../../methods/array/chunk');

describe('chunk', () => {
  it('should return an array of chunks with specified size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunkSize = 3;
    const chunks = chunk(array, chunkSize);
    expect(chunks).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  it('should return an empty array if array is empty', () => {
    const array = [];
    const chunkSize = 2;
    const chunks = chunk(array, chunkSize);
    expect(chunks).toEqual([]);
  });

  it('should return an array with single chunk if size is greater than array length', () => {
    const array = [1, 2, 3];
    const chunkSize = 4;
    const chunks = chunk(array, chunkSize);
    expect(chunks).toEqual([[1, 2, 3]]);
  });
  it('should return an array of chunks with the last chunk possibly having less elements than the size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunkSize = 4;
    const chunks = chunk(array, chunkSize);
    expect(chunks).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
  });
  it('should throw an error if first argument is not an array', () => {
    const notArray = 'not an array';
    const chunkSize = 2;
    expect(() => chunk(notArray, chunkSize)).toThrowError(TypeError('First argument must be an array'));
  });
  it('should throw an error if second argument is not a number', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const notNumber = 'not a number';
    expect(() => chunk(array, notNumber)).toThrowError(RangeError('Second argument must be a positive integer'));
  });
  it('should throw an error if second argument is less than 1', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunkSize = 0;
    expect(() => chunk(array, chunkSize)).toThrowError(RangeError('Second argument must be a positive integer'));
  });
});