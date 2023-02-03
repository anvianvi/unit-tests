const map = require('../../methods/array/map');

const square = (n) => n * n;
const array = [1, 2, 3, 4];
const object = { a: 1, b: 2, c: 3, d: 4 };
const users = [{ 'user': 'barney' }, { 'user': 'fred' }];


describe('map', () => {
  it('should throw an error if the first argument is not an array or object', () => {
    expect(() => map('notArrayOrObject', square)).toThrowError(TypeError('First argument must be an array or object'));
  });
  it('should throw an error if second argument not a function', () => {
    expect(() => map([4, 8],)).toThrowError(Error('Callback must be a function or string'));
    expect(() => map([4, 8], 5)).toThrowError(Error('Callback must be a function or string'));
    expect(() => map([4, 8], NaN)).toThrowError(Error('Callback must be a function or string'));
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
    const result = map(object, square);
    expect(result).toEqual([1, 4, 9, 16]);
  });
  it('should extract a property from each element of an array', () => {
    const result = map(users, 'user');
    expect(result).toEqual(['barney', 'fred']);
  });
  it('should return an empty array if the input array is empty', () => {
    const result = map([], (value) => value * 2);
    expect(result).toEqual([]);
  });
  it('should return an array with the same length as the input array', () => {
    const result = map(array, (value) => value * 2);
    expect(result.length).toEqual(array.length);
  });
  it('should not modify the original input array', () => {
    map(array, (value) => value * 2);
    expect(array).toEqual([1, 2, 3, 4]);
  });

});



