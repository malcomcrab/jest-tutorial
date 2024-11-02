
const ceaserCypher = require('./ceaserCypher')

test('return some string thingy', () => {
    expect(ceaserCypher('abc',1)).toBe('bcd')
})

test('return some string thingy', () => {
    expect(ceaserCypher('abc',2)).toBe('cde')
})

test('return some string thingy', () => {
    expect(ceaserCypher('abc',3)).toBe('def')
})

test('return some string thingy', () => {
    expect(ceaserCypher('xyz',3)).toBe('abc')
})

test('return some string thingy', () => {
    expect(ceaserCypher('(xyz!)',3)).toBe('(abc!)')
})