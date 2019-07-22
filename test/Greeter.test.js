const Greeter = require('../src/Greeter');
test('greeter', () => {
    let obj = new Greeter();
    expect(obj.greet('kuna', 7)).toBe('Good morning Kuna');
    expect(obj.greet('kuna', 20)).toBe('Good evening Kuna');
    expect(obj.greet('kuna', 23)).toBe('Good night Kuna');
    expect(obj.greet('kuna', 3)).toBe('Good night Kuna');
})