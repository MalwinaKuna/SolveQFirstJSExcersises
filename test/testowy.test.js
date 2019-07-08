const testowy= require('../src/testowy');

test('prime factors', ()=>{
    let obj= new testowy();
    expect(obj.generate(4)).toEqual([2,2]);
})

test('string calculator', ()=>{
    let obj= new testowy();
    expect(obj.add('1,2\n3\n1')).toBe(7);

})
