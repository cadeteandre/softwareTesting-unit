import mergeIntervals from "./mergeIntervals"

describe('mergeIntervals', () => {
    it('should return an empty array if the input is empty' , () => {
        const result = mergeIntervals([]);
        expect(result).toEqual([]);
    }) 
    it('should return the same interval if the input contains a single interval', () => {
        const result = mergeIntervals([[1, 5]]);
        expect(result).toEqual([[1, 5]]);
    });
    it('should return the same intervals if there are no overlapping intervals', () => {
        const result = mergeIntervals([[1, 3], [5, 7], [8, 10]]);
        expect(result).toEqual([[1, 3], [5, 7], [8, 10]]);
    });
    it('should merge intervals that are completely overlapping', () => {
        const result = mergeIntervals([[1, 5], [2, 4], [3, 6]]);
        expect(result).toEqual([[1, 6]]);
    });
    it('should merge intervals that are partially overlapping', () => {
        const result = mergeIntervals([[1, 3], [2, 6], [8, 10]]);
        expect(result).toEqual([[1, 6], [8, 10]]);
    });
    it('should merge consecutive intervals into a single interval', () => {
        const result = mergeIntervals([[1, 2], [2, 3], [3, 4]]);
        expect(result).toEqual([[1, 4]]);
    });
    it('should handle unsorted intervals by sorting them first', () => {
        const result = mergeIntervals([[5, 7], [1, 3], [2, 4]]);
        expect(result).toEqual([[1, 4], [5, 7]]);
    });
    it('should merge a combination of overlapping and non-overlapping intervals', () => {
        const result = mergeIntervals([[1, 4], [5, 6], [7, 9], [2, 5]]);
        expect(result).toEqual([[1, 6], [7, 9]]);
    });
})