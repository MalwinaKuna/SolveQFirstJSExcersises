const StringCalculator= require('../src/StringCalculator');

test('add',()=>{
    let action= new StringCalculator();
   expect(action.add('')).toBe(0);
   expect(action.add('3')).toBe(3);
   expect(action.add('1,2')).toBe(3);
   expect(action.add('1\n2,3,4')).toBe(10);
   expect(action.add('-1,-2')).toBe('negatives not allowed');
    
})