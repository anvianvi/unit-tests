const toPairs = require('../../methods/object/toPairs');

describe('toPairs', () => {
  it('should throw an error if first argument not an object', () => {
    const secondArg = ['a', 'c'];
    expect(() => toPairs('firstObject', secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => toPairs(null, secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => toPairs([1, 2, 3], secondArg)).toThrowError(RangeError('First argument must be an object'));
    expect(() => toPairs(4, secondArg)).toThrowError(RangeError('First argument must be an object'));
  });

  test('should сreate an array of own enumerable string keyed-value pairs for object entries', () => {
    function Foo() { this.a = 1; this.b = 2; }
    Foo.prototype.c = 3;
    expect(toPairs(new Foo)).toEqual([['a', 1], ['b', 2]]);
  });
  test('should return an array of arrays where each sub-array is a key-value pair from the object', () => {
    const object = { a: 1, b: '2', c: 3 };
    const result = toPairs(object);
    expect(result).toEqual([['a', 1], ['b', '2'], ['c', 3]]);
  });
  test('should return an array of arrays where each sub-array is a key-value pair from the object in the order of insertion', () => {
    const object = {};
    object.a = 1;
    object.b = '2';
    object.c = 3;
    const result = toPairs(object);
    expect(result).toEqual([['a', 1], ['b', '2'], ['c', 3]]);
  });

  test('should return only own properties', () => {
    const object = Object.create({ a: 1 });
    object.b = 2;
    const result = toPairs(object);
    expect(result).toEqual([['b', 2]]);
  });

  test('should return a new array and does not modify the original object', () => {
    const object = { a: 1, b: '2', c: 3 };
    const result = toPairs(object);
    expect(result).toEqual([['a', 1], ['b', '2'], ['c', 3]]);
    expect(object).toEqual({ a: 1, b: '2', c: 3 });
  });
});
