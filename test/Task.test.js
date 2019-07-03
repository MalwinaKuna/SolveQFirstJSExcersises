const Task = require('../src/Task');

test('description', () => {
    let ob = new Task();
    expect(ob.isItHot(30)).toBe(true);
})
test('desc', () => {
    let obj1 = new Task();
    expect(obj1.counter(3)).toBe(9);
})



test('desc', () => {

    let obj2 = new Task();
    expect(obj2.add(1, 1)).toBe(2);
})