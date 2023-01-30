const includes = require('../methods/array/includes');

describe('includes', () => {
  describe('includes', () => {
    it('should throw an error if fromIndex argument is not a number', () => {
      expect(() => includes([1, 2, 3,], 3, 'not a number')).toThrowError(RangeError('fromIndex argument must be a number'));
    });
    it('should throw an error if first argument is not aa string, array, or object', () => {
      expect(() => includes(3, 3,)).toThrowError(TypeError('collection must be a string, array, or object'));
      expect(() => includes(NaN, NaN,)).toThrowError(TypeError('collection must be a string, array, or object'));
      expect(() => includes(undefined, undefined)).toThrowError(TypeError('collection must be a string, array, or object'));
      expect(() => includes(true, true)).toThrowError(TypeError('collection must be a string, array, or object'));
    });
    it('returns true if the value is found in the string', () => {
      const str = 'abcdefg';
      expect(includes(str, 'b')).toBe(true);
      expect(includes(str, 'f', 2.2)).toBe(true);
      expect(includes(str, 'cd', 1)).toBe(true);
      expect(includes(str, 'efg', 2.2)).toBe(true);
    });
    it('returns false if the value is not found in the string', () => {
      const str = 'abcdefg';
      expect(includes(str, 'h')).toBe(false);
      expect(includes(str, 'd', 4)).toBe(false);
      expect(includes(str, 'fs', 1)).toBe(false);
      expect(includes(str, 'bc', 4.7)).toBe(false);
      expect(includes(str, 'eqwef', 3)).toBe(false);
    });
    it('returns true if the value is found in the array', () => {
      const array = [1, 2, 3, 'f', undefined, NaN];
      expect(includes(array, 2)).toBe(true);
      expect(includes(array, 'f')).toBe(true);
      expect(includes(array, undefined, 3.4)).toBe(true);
      expect(includes(array, NaN, 2.2)).toBe(true);
    });
    it('returns false if the value is not found in the array', () => {
      const array = [1, 2, 3, 'f', undefined, NaN];
      expect(includes(array, 4)).toBe(false);
      expect(includes(array, 1, 3)).toBe(false);
      expect(includes(array, 'aa')).toBe(false);
      expect(includes(array, null)).toBe(false);
    });
    it('returns true if the value is found in the object values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(includes(obj, 2)).toBe(true);
    });
    it('returns false if the value is not found in the object values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(includes(obj, 4)).toBe(false);
    });
  });
});
