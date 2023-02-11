const pick = require('../../methods/object/pick');

describe('pick', () => {

  it('should throw an error if first argument not an object', () => {
    const secondArg = ['a', 'c'];
    expect(() => pick('firstObject', secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => pick(null, secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => pick([1, 2, 3], secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => pick(4, secondArg)).toThrowError(RangeError('First argument must be an object'));
  });

  it('should create an object composed of the picked `object` properties', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 }
    expect(pick(object, ['a', 'c'])).toEqual({ 'a': 1, 'c': 3 });
  });
  it('should return an empty object if properties array is empty', () => {
    const object = { a: 1, b: 2, c: 3, d: 4 };
    expect(pick(object, [])).toEqual({});
  });
  it('should return a new object and does not modify the original object', () => {
    const object = { a: 1, b: 2, c: 3, d: 4 };
    const picked = pick(object, ['a', 'c']);
    expect(picked).toEqual({ a: 1, c: 3 });
    expect(object).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});
