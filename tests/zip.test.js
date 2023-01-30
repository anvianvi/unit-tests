const zip = require('../methods/array/zip');

describe('zip', () => {
  describe('zip', () => {
    it('should throw an error if any of the input arguments is not an array', () => {
      const a = [1, 2, 3];
      const b = 'not an array';
      expect(() => zip(a, b)).toThrowError('All arguments must be arrays');
    });
    it('should return an array of arrays, where the nth arrays contains the nth elements of each input array', () => {
      const a = [1, 2, 3];
      const b = [10, 20, 30];
      expect(zip(a, b)).toEqual([[1, 10], [2, 20], [3, 30]]);

    });
    it('should handle arrays of different lengths', () => {
      const a = [1, 2, 3];
      const b = [10, 20];
      expect(zip(a, b)).toEqual([[1, 10], [2, 20], [3, undefined]]);
    });

    it('should handle empty arrays', () => {
      const a = [1, 2, 3];
      const b = [];
      expect(zip(a, b)).toEqual([[1, undefined], [2, undefined], [3, undefined]]);
    });

    it('should handle single input arrays', () => {
      const a = [1, 2, 3];
      expect(zip(a)).toEqual([[1], [2], [3]]);
    });
  });
});
