const find = require('../../methods/array/find');

describe('find', () => {
  it('should throw an error if first argument is not an array', () => {
    const notArray = 'not an array';
    expect(() => find(notArray)).toThrowError(TypeError('First argument must be an array or an object'));
  });

  it('should return value if this value exists in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (num) => num > 3;
    expect(find(arr, fn)).toEqual(4);
  });
  it('should return undefined if this value doesnt exist in the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const fn = (num) => num > 5;
    expect(find(arr, fn)).toBeUndefined();
  });

  const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
  ];

  it('should return the first element where the predicate returns truthy', () => {
    const result = find(users, (o) => o.age < 40);
    expect(result).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
  });

  it('should return the first element that matches the properties in the given object', () => {
    const result = find(users, { 'age': 1, 'active': true });
    expect(result).toEqual({ 'user': 'pebbles', 'age': 1, 'active': true });
  });

  it('should return the first element that matches the given property', () => {
    const result = find(users, ['active', false]);
    expect(result).toEqual({ 'user': 'fred', 'age': 40, 'active': false });
  });

  it('should return the first element that has the given property', () => {
    const result = find(users, 'active');
    expect(result).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
  });

  it('should return undefined if no element matches the predicate', () => {
    const result = find(users, (o) => o.age > 100);
    expect(result).toBeUndefined();
  });

});
