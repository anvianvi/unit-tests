const compact = require('../../methods/array/compact');

describe('compact', () => {
  it('should remove all falsey values from the array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    expect(compact([null, undefined, NaN, 1, 2, 3])).toEqual([1, 2, 3]);
    expect(compact([false, 0, '', undefined, NaN])).toEqual([]);
  });

  it('should return an empty array if all values are falsey', () => {
    expect(compact([null, undefined, NaN, false, 0, ''])).toEqual([]);
  });

  it('should return the input array if all values are truthy', () => {
    expect(compact([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(compact([])).toEqual([]);
  });

  it('should throw an error if argument is not an array', () => {
    const notArray = 'not an array';
    expect(() => compact(notArray)).toThrowError(TypeError('Argument must be an array'));
  });
});