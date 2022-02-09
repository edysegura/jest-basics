'use strict'

const adder = require('./adder')

describe('Adder Module', () => {
  it('it should sum two numbers', () => {
    expect(adder(5, 5)).toBe(10)
  })
})
