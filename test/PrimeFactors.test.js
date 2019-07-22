const PrimeFactors = require('../src/PrimeFactors');
test('desc', () => {
    let obj = new PrimeFactors();
    expect(obj.generate(4)).toEqual([2, 2]);
})