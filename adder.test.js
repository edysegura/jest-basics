const adder = require('./adder')

test('it should sum numbers', () => {
    expect(adder(5,5)).toBe(10)
})