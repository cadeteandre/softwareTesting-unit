import { evenOdd } from "./evenOdd"

describe('evenOdd', () => {
    it('should return ["Odd", "Even", "Odd"] if n = 3', () => {
        const result = evenOdd(3);
        expect(result).toEqual(["Odd", "Even", "Odd"]);
    })
    it('should return ["Odd", "Even", "Odd"] if n = 3', () => {
        const result = evenOdd(3);
        expect(result).toEqual(["Odd", "Even", "Odd"]);
    })
    it('should return [] if n = 0', () => {
        const result = evenOdd(0);
        expect(result).toEqual([]);
    })
    it('should return [] if n < 0', () => {
        const result = evenOdd(-3);
        expect(result).toEqual([]);
    })
})