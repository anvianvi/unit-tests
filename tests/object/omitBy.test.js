const omitBy = require('../../methods/object/omitBy');

describe('omitBy', () => {

  it('should throw an error if first argument not an object', () => {
    const secondArg = ['a', 'c'];
    expect(() => omitBy('firstObject', secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => omitBy(null, secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => omitBy([1, 2, 3], secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => omitBy(4, secondArg)).toThrowError(RangeError('First argument must be an object'));
  });

  it('should return an object composed of the own and inherited enumerable string keyed properties of object that predicate doesnt return truthy for', () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const func = (v) => !(v > 2);
    expect(omitBy(object, func)).toEqual({ a: 1, b: '2' });
  });
  it('should return the same object when there are no properties to omit', () => {
    const object = { prop1: 'value1', prop2: 'value2' };
    expect(omitBy(object)).toEqual(object);
  });
});
