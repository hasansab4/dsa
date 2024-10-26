const rangeSum = require('./index');

describe('rangeSum', () => {
    it('should return correct sums for given ranges', () => {
        const A = [1, 2, 3, 4, 5];
        const B = [[0, 2], [1, 3], [2, 4]];
        const result = rangeSum(A, B);
        expect(result).toEqual([6, 9, 12]);
    });

    it('should return an empty array when no ranges are provided', () => {
        const A = [1, 2, 3, 4, 5];
        const B = [];
        const result = rangeSum(A, B);
        expect(result).toEqual([]);
    });

    it('should handle a single element range', () => {
        const A = [1, 2, 3, 4, 5];
        const B = [[2, 2]];
        const result = rangeSum(A, B);
        expect(result).toEqual([3]);
    });

    it('should handle ranges that span the entire array', () => {
        const A = [1, 2, 3, 4, 5];
        const B = [[0, 4]];
        const result = rangeSum(A, B);
        expect(result).toEqual([15]);
    });
});
