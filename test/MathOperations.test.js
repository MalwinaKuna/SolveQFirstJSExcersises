
const MathOperations=require('../src/MathOperations');

test('result',()=>{
    let m=new MathOperations();
    expect(m.add(5,5)).toBe(10);
})
test('result',()=>{
    let m=new MathOperations();
    expect(m.muultiply(4,4)).toBe(16);
})
test('result', ()=>{
    let m=new MathOperations();
    expect(m.substract(10,2)).toBe(8);
})
test('result',()=>{
    let m=new MathOperations();
    expect(m.divide(8,4)).toBe(2);
})

