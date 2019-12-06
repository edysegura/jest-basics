import { MathService } from '../src/math.service'

describe('Adder Module', () => {
  it('it should sum numbers', () => {
    // GIVEN
    const expectedValue = 10

    // WHEN
    const value = MathService.adder(5, 5)

    // THAN
    expect(value).toBe(expectedValue)
  })
})
