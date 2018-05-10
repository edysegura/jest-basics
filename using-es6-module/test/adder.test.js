'use strict'

import adder from '../src/adder'

describe('Adder Module', () => {
  it('it should sum numbers', () => {
    expect(adder(5, 5)).toBe(10)
  })
})
