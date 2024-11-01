
const calculator = require ('./calculator')

test('Take two numbers and return the product of the functions equation', () => {
    expect(calculator.add(1,1,)).toBe(2), 
    expect(calculator.subtract(10,5)).toBe(5)
    expect(calculator.multiply(2,5)).toBe(10)
    expect(calculator.divide(10,2)).toBe(5)
})