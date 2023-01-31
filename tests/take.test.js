const take = require('../methods/array/take');

describe('take', () => {
  it('should throw an error if first argument is not an array', () => {
    const notArray = 'not an array';
    expect(() => take(notArray)).toThrowError(TypeError('First argument must be an array'));
  });
  it('should throw an error if second argument is not a integer', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(() => take(array, 'not a number')).toThrowError(RangeError('Second argument must be a integer'));
  });
  it('returns the copy of array with only first element if n is not specified', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });
  it('returns the first n elements of the array', () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
    expect(take([1, 2, 3], 2.5)).toEqual([1, 2]);
    expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    expect(take([1, 2, 3, 4, 5], 3.8)).toEqual([1, 2, 3]);
  });
  it('returns an empty array if n is negative', () => {
    expect(take([1, 2, 3], -1)).toEqual([]);
    expect(take([1, 2, 3], -1.28)).toEqual([]);

  });
  it('returns an empty array if n is equal zero', () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
    expect(take([1, 2, 3], 0.88)).toEqual([]);

  });
  it('returns the whole array if n is greater than the array length', () => {
    expect(take([1, 2, 3], 10)).toEqual([1, 2, 3]);
    expect(take([1, 2, 3], 10.8)).toEqual([1, 2, 3]);
  });
});
