import { factorial } from "./factorial"

describe('fatorial', () => {
    it('should return 6 if n = 3', () => {
        const result = factorial(3);
        expect(result).toEqual(6);
    })
    it('should return 40320 if n = 8', () => {
        const result = factorial(8);
        expect(result).toEqual(40320);
    })
    it('should return 1 if n = 0', () => {
        const result = factorial(0);
        expect(result).toEqual(1);
    })
    it('should handle larger numbers without errors', () => {
        const result = factorial(10);
        expect(result).toEqual(3628800);
    })
    it('should throw an error for negative numbers', () => {
        expect(() => factorial(-1)).toThrow('Input must be a non-negative integer');
    })
})