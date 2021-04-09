const doConvert = require('./numbersToWords')

test('convert number 7 to letters',()=>{
    expect(doConvert(7)).toBe('seven')
    
})

test('convert number 42 to letters',()=>{
    
    expect(doConvert(42)).toBe('forty two')
})

test('convert number 2001 to letters',()=>{
    
    expect(doConvert(2001)).toBe('two  thousand one')   
})

test('convert number 1999 to letters',()=>{
    
    expect(doConvert(1999)).toBe('one  thousand nine hundred ninety nine')   
})

test('convert number 17999 to letters',()=>{
    
    expect(doConvert(17999)).toBe('seventeen  thousand nine hundred ninety nine')
})