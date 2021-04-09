const doConvert = require('./numbersToWords')

test('convert num to letters',()=>{
    expect(doConvert(7)).toBe('seven ')
    expect(doConvert(42)).toBe('forty two  ')
    expect(doConvert(2001)).toBe('two  thousand one ')
    expect(doConvert(1999)).toBe('one  thousand nine hundred ninety nine  ')
    expect(doConvert(17999)).toBe('seventeen  thousand nine hundred ninety nine  ')
})