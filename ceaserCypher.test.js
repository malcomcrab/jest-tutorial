
const ceaserCypher = require('./ceaserCypher')

test('Return the letters shifted to one space in the Alphabet', () => {
    expect(ceaserCypher('abc',1)).toBe('bcd')
})

test('Return the letters shifted to two space in the Alphabet', () => {
    expect(ceaserCypher('abc',2)).toBe('cde')
})

test('Return the letters shifted to three space in the Alphabet', () => {
    expect(ceaserCypher('abc',3)).toBe('def')
})

test('Return the letters shifted to three spaces testing wrap back to abc after z', () => {
    expect(ceaserCypher('xyz',3)).toBe('abc')
})

test('Return letters shifted three spaces, testing wrap to a after z as well as punctuation staying the same', () => {
    expect(ceaserCypher('(xyz!)',3)).toBe('(abc!)')
})

test('Testing the previous but with a phrase', () => {
    expect(ceaserCypher('(hello world!)',3)).toBe('(khoor zruog!)')
})

test('Testing capitals are returned capitalised after shifting. ', () => {
    expect(ceaserCypher('(Hello World!)',3)).toBe('(Khoor Zruog!)')
})

test('Hard mode test for capitalising after letters being shifted', () => {
    expect(ceaserCypher('(ZoOtY pAtOoTiE XxX !)',3)).toBe('(CrRwB sDwRrWlH AaA !)')
})