const omit = require('../../methods/object/omit');

describe('omit', () => {

  it('should throw an error if first argument not an object', () => {
    const secondArg = ['a', 'c'];
    expect(() => omit('firstObject', secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => omit(null, secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => omit([1, 2, 3], secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => omit(4, secondArg)).toThrowError(RangeError('First argument must be an object'));
  });

  it('should create object composed of the own and inherited enumerable property paths of object that are not omitted', () => {
    let object = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' });
  });
  it('should omit the properties specified in `paths` from the object', () => {
    const object = {
      a: 1, b: 2, c: 3, d: 4, e: 5
    };
    const paths = ['b', 'd'];
    expect(omit(object, paths)).toEqual({ a: 1, c: 3, e: 5 });
  });
  test('should correctly omit multiple properties', () => {
    const object = { prop1: 'value1', prop2: 'value2', prop3: 'value3' };
    const paths = ['prop2', 'prop3'];
    const expectedResult = { prop1: 'value1' };
    expect(omit(object, paths)).toEqual(expectedResult);
  });
  test('should return an empty object when all properties are omitted', () => {
    const object = { prop1: 'value1', prop2: 'value2' };
    const paths = ['prop1', 'prop2'];
    const expectedResult = {};
    expect(omit(object, paths)).toEqual(expectedResult);
  });
});
