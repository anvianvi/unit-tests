const map = require('../methods/array/map');

const square = (n) => n * n;
const array = [1, 2, 3, 4];


describe('map', () => {
  it('should throw an error if the first argument is not an array or object', () => {
    expect(() => map('notArrayOrObject', square)).toThrowError(TypeError('First argument must be an array or object'));
  });
  it('should throw an error if second argument not a function', () => {
    expect(() => map([4, 8],)).toThrowError(Error('Callback must be a function or string'));
  });

  it('should apply the callback function to each element of the array', () => {
    const result = map(array, square);
    expect(result).toEqual([1, 4, 9, 16]);
  });
  it('should apply the callback function to each element of an array', () => {
    const array = [4, 8];
    const result = map(array, square);
    expect(result).toEqual([16, 64]);
  });
  it('should apply the callback function to each value of an object', () => {
    const obj = { 'a': 4, 'b': 8 };
    const result = map(obj, square);
    expect(result).toEqual([16, 64]);
  });
  it('should extract a property from each element of an array', () => {
    const users = [{ 'user': 'barney' }, { 'user': 'fred' }];
    const result = map(users, 'user');
    expect(result).toEqual(['barney', 'fred']);
  });

});



