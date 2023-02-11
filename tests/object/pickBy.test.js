const pickBy = require('../../methods/object/pickBy');

describe('pickBy', () => {

  it('should throw an error if first argument not an object', () => {
    const secondArg = ['a', 'c'];
    expect(() => pickBy('firstObject', secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => pickBy(null, secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => pickBy([1, 2, 3], secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => pickBy(4, secondArg)).toThrowError(RangeError('First argument must be an object'));
  });
  it('should create an object composed of the object properties predicate returns truthy for', () => {
    const object = {
      a: 1, b: 2, c: 3, d: 4, e: 5
    };
    const func = (v) => v < 4;
    expect(pickBy(object, func)).toEqual({ a: 1, b: 2, c: 3 });
  });

  it('should picks properties based on the result of the callback function', () => {
    const object = { a: 1, b: '2', c: 3 };
    const result = pickBy(object, value => typeof value === 'number');
    expect(result).toEqual({ a: 1, c: 3 });
  });
  it('pickBy method returns an empty object if callback function is not specified', () => {
    const object = { a: 1, b: '2', c: 3 };
    const result = pickBy(object);
    expect(result).toEqual({});
  });
  it('pickBy method returns a new object and does not modify the original object', () => {
    const object = { a: 1, b: '2', c: 3 };
    const result = pickBy(object, value => typeof value === 'number');
    expect(result).toEqual({ a: 1, c: 3 });
    expect(object).toEqual({ a: 1, b: '2', c: 3 });
  });
});
