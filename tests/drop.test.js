const drop = require('../methods/array/drop');

describe('drop', () => {
  it('should throw an error if first argument is not an array', () => {
    const notArray = 'not an array';
    expect(() => drop(notArray)).toThrowError(TypeError('First argument must be an array'));
  });
  it('should throw an error if second argument is not a integer', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(() => drop(array, 'not a number')).toThrowError(RangeError('Second argument must be a integer'));
  });
  it('should return an empty array if the input is empty array', () => {
    expect(drop([])).toEqual([]);
  });
  it('should return the same array if n is 0 or negative', () => {
    const array = [1, 2, 3, 4, 5];
    expect(drop(array, 0)).toEqual(array);
    expect(drop(array, -1)).toEqual(array);
  });
  it('should return a copy of the array with removed first element if n argument not passed', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
  it('should return a copy of the array with the first n elements removed', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3], 2.2)).toEqual([3]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
    expect(drop([1, 2, 3], 5.3)).toEqual([]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(drop([1, 2, 3], 0.7)).toEqual([1, 2, 3]);
    expect(drop([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
    expect(drop([1, 2, 3, 4, 5], 2.7)).toEqual([3, 4, 5]);
    expect(drop([1, 2, 3, 4, 5], 5)).toEqual([]);
    expect(drop([1, 2, 3, 4, 5], 5.9)).toEqual([]);

  });
});