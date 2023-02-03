const dropWhile = require('../../methods/array/dropWhile');

describe('dropWhile', () => {
  it('should throw an error if first argument is not an array', () => {
    const notArray = 'not an array';
    expect(() => dropWhile(notArray)).toThrowError(TypeError('First argument must be an array'))
  });
  const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  it('should drop elements while the given function returns true', () => {
    const result = dropWhile(users, (o) => !o.active);
    expect(result).toEqual([{ 'user': 'pebbles', 'active': true }]);
  });
  it('should drop elements while the given object matches', () => {
    const result = dropWhile(users, { 'user': 'barney', 'active': false });
    expect(result).toEqual([
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ]);
  });
  it('should drop elements while the given property matches the value', () => {
    const result = dropWhile(users, ['active', false]);
    expect(result).toEqual([{ 'user': 'pebbles', 'active': true }]);
  });
  it('should drop elements while the given property is truthy', () => {
    const result = dropWhile(users, 'active');
    expect(result).toEqual(users);
  });
});
