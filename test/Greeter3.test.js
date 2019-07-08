const Greeter3 = require('../src/Greeter3');
test('description', () => {
    let all = new Date(1970, 1, 1, 12, 1);
    let allDay = new Greeter3(all);
    expect(allDay.greeter('kuna')).toBe('Hello Kuna');
})
test('greet in the morning', () => {
    let morning = new Date(1970, 1, 1, 6, 0);
    let morningGreet = new Greeter3(morning);
    expect(morningGreet.greeter('kuna')).toBe('Good morning Kuna');
})
test('greet in the evening', () => {
    let evening = new Date(1970, 1, 1, 18, 1);
    let eveningGreet = new Greeter3(evening);
    expect(eveningGreet.greeter('kuna')).toBe('Good evening Kuna');
})
test('greet at night', () => {
    let night = new Date(1970, 1, 1, 22);
    let greetNight = new Greeter3(night);
    expect(greetNight.greeter('kuna')).toBe('Good night Kuna');
})