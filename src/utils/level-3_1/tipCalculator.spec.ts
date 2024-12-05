import tipCalculator from "./tipCalculator"

describe('tipCalculator', () => {
    it('result.tip should be 10 if billValue is 100 and serviceQuality is ok', () => {
        const result = tipCalculator('100', '4', 'ok');
        expect(result.tip).toEqual(10);
    })
    it('result.tip should be 2 if billValue is 100 and serviceQuality is bad', () => {
        const result = tipCalculator('100', '3', 'bad');
        expect(result.tip).toEqual(2);
    })
    it('result.tip should be 20 if billValue is 100 and serviceQuality is super', () => {
        const result = tipCalculator('100', '3', 'super');
        expect(result.tip).toEqual(20);
    })
    it('result.pricePerPerson should be 30 if billValue is 100, peopleAmount is 4 and serviceQuality is super', () => {
        const result = tipCalculator('100', '4', 'super');
        expect(result.pricePerPerson).toEqual(30);
    })
    it('result.pricePerPerson should be 36.67 if billValue is 100, peopleAmount is 3 and serviceQuality is ok', () => {
        const result = tipCalculator('100', '3', 'ok');
        expect(result.pricePerPerson).toEqual(36.67);
    })
    it('result.pricePerPerson should be 51 if billValue is 100, peopleAmount is 2 and serviceQuality is bad', () => {
        const result = tipCalculator('100', '2', 'bad');
        expect(result.pricePerPerson).toEqual(51);
    })
})