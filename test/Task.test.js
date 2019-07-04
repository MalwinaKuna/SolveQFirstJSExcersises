const Task=require('../src/Task');

test('description', ()=>{
    let obj1=new Task();
    expect(obj1.isItHot(29, 23)).toBe(true);
    expect(obj1.isItHot(19, 20)).toBe(false);
});
test('description', ()=>{
    let obj2= new Task();
    expect(obj2.isPrime(11)).toBe(true);
    expect(obj2.isPrime(27)).toBe(false);
})

test('StringCalc', ()=>{
    let obj3= new Task();
    expect(obj3.add('1')).toBe(1);
    expect(obj3.add('2\n2,1\n1')).toBe(6);
})