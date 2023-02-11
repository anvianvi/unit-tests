const merge = require('../../methods/object/merge');

describe('merge', () => {

  it('should throw an error if first argument not an object', () => {
    const secondObject = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
    expect(() => merge('firstObject', secondObject)).toThrowError(RangeError('First argument must be an object'));
    expect(() => merge(null, secondObject)).toThrowError(RangeError('First argument must be an object'));
    expect(() => merge([1, 2, 3], secondObject)).toThrowError(RangeError('First argument must be an object'));
    expect(() => merge(4, secondObject)).toThrowError(RangeError('First argument must be an object'));
  });
  it('should throw an error if second argument not an object', () => {
    const firstObject = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
    expect(() => merge(firstObject, 'secondObject')).toThrowError(RangeError('Second argument must be an object'));
    expect(() => merge(firstObject, null)).toThrowError(RangeError('Second argument must be an object'));
    expect(() => merge(firstObject, [1, 2, 3])).toThrowError(RangeError('Second argument must be an object'));
    expect(() => merge(firstObject, 4)).toThrowError(RangeError('Second argument must be an object'));
  });

  it('should merge two objects', () => {
    const firstObject = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
    const secondObject = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
    const expected = { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
    expect(merge(firstObject, secondObject)).toEqual(expected);
  });

  it('should overwrite properties in the first object with properties in the second object', () => {
    const firstObject = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
    const secondObject = { 'a': [{ 'b': 3 }, { 'e': 5 }] };
    const expected = { 'a': [{ 'b': 3 }, { 'd': 4, 'e': 5 }] };
    expect(merge(firstObject, secondObject)).toEqual(expected);
  });

  it('should return the first object when the second object is empty', () => {
    const firstObject = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
    const secondObject = {};
    const expected = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
    expect(merge(firstObject, secondObject)).toEqual(expected);
  });

  it('should return the second object when the first object is empty', () => {
    const firstObject = {};
    const secondObject = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
    const expected = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
    expect(merge(firstObject, secondObject)).toEqual(expected);
  });

  it('should merges nested objects', () => {
    const firstObject = { 'a': { 'b': 2, 'c': 3 } };
    const secondObject = { 'a': { 'd': 4 } };
    const expected = { 'a': { 'b': 2, 'c': 3, 'd': 4 } };
    expect(merge(firstObject, secondObject)).toEqual(expected);
  });

  it('should overwrite properties in the first object with properties in the second object for nested objects', () => {
    const firstObject = { 'a': { 'b': 2, 'c': 3 } };
    const secondObject = { 'a': { 'b': 4 } };
    const expected = { 'a': { 'b': 4, 'c': 3 } };
    expect(merge(firstObject, secondObject)).toEqual(expected);
  });
});
