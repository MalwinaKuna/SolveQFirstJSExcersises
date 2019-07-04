const PrimeFactors = require('../src/PrimeFactors');

test('PrimeFactors', () => {
    let objt1 = new PrimeFactors();
    expect(objt1.generate(4)).toEqual([2, 2]);
    expect(objt1.generate(3)).toEqual([3]);
    expect(objt1.generate(5)).toEqual([5]);
    expect(objt1.generate(6)).toEqual([2, 3]);
    expect(objt1.generate(7)).toEqual([7]);
    expect(objt1.generate(11)).toEqual([11]);
    expect(objt1.generate(6)).toEqual([2, 3]);
    expect(objt1.generate(9)).toEqual([3, 3]);
    expect(objt1.generate(8)).toEqual([2, 2, 2]);
})