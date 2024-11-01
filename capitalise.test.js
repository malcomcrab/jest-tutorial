

const capitalise = require('./capitalise')

    test('capitalizes first letter and returns string', () => {
        expect(capitalise('tooth')).toBe('Tooth')
    })