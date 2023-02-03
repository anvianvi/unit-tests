const filter = require('../../methods/array/filter');

describe('filter', () => {
  it('should throw an error if first argument is not an array', () => {
    const notArray = 'not an array';
    expect(() => filter(notArray)).toThrowError(TypeError('First argument must be an array'));
  });
  it('should throw an error if first argument is not an array', () => {
    expect(() => filter([1, 2], { 'age': 36, 'active': true })).toThrowError(TypeError('Second argument must be a function'));
    expect(() => filter([1, 2], ['active', false])).toThrowError(TypeError('Second argument must be a function'));
    expect(() => filter([1, 2], 'active')).toThrowError(TypeError('Second argument must be a function'));

  });

  it('should iterates over elements of collection, returning an array of all elements predicate returns truthy for',
    () => {
      expect(filter([1, 2, 3, 4, 5, 6], (a) => a % 2 === 0))
        .toStrictEqual([2, 4, 6]);
    });
  const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
  ];

  it('should filter elements based on the given function', () => {
    const result = filter(users, (o) => !o.active);
    expect(result).toEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
  });
});

