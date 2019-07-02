const one=require('../src/one');

test('result od add',()=>{
    expect(one.add(3,4)).toBe(7);// tutaj jest test
    expect(one.add(0,0)).toBe(0);
    expect(one.add(-3,4)).toBe(1);
});


test('result of multiply',()=>{
    expect(one.muultiply(4,2)).toBe(8);
});


test('result of divide',()=>{
    expect(one.divide(10,2)).toBe(5);
});


test('result of substract',()=>{
    expect(one.substract(12,11)).toBe(1);
});


/* const functionName=require('path');
test('description', ()=>{
    expect(functionName(param1,param2)).toBe(result);
}) */