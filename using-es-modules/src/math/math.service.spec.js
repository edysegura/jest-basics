import { MathService } from './math.service'

describe('Adder Module', () => {
  it('it should sum numbers', () => {
    // WHEN
    const value = MathService.adder(5, 5)

    // THAN
    expect(value).toBe(10)
  })

  it.todo('should return null for non number arguments')
})
