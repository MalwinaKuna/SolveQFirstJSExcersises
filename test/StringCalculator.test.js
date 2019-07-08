const StringCalculator= require('../src/StringCalculator');

test('description', () => {
    let obj= new StringCalculator();
    expect(obj.add('1')).toBe(1); 

})














//  expect(action.add('')).toBe(0);
//  expect(action.add('3')).toBe(3);
//  expect(action.add('1,2')).toBe(3);
//  expect(action.add('1\n2,3,4')).toBe(10);
//  expect(action.add('-1,-2')).toBe('negatives not allowed');