import { areAnagrams } from "./areAnagrams"

describe('areAnagrams', () => {
    it('should return true if the parameters are empty strings', () => {
        const result = areAnagrams('', '');
        expect(result).toBeTruthy();
    })
    it('should return true for anagrams with different cases', () => {
        const result = areAnagrams('LiSteN', 'sIlEnT');
        expect(result).toBeTruthy();
    })
    it('should return true for anagrams with spaces', () => {
        const result = areAnagrams('conversation', 'voices rant on');
        expect(result).toBeTruthy();
    })
    it('should return false for strings that are not anagrams', () => {
        const result = areAnagrams('car', 'boat');
        expect(result).toBeFalsy();
    })
    it('should return true for anagrams with special characters', () => {
        const result = areAnagrams('@!(*/', '!/*@(');
        expect(result).toBeTruthy();
    })
})