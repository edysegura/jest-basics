import CPF from './CPF'

describe('CPF', () => {
  describe('constructor', () => {
    it('should create a CPF instance with a valid CPF number', () => {
      const cpf = new CPF('123.456.789-09')
      expect(cpf).toBeDefined()
    })

    it('should throw an error for an invalid CPF number', () => {
      expect(() => new CPF('123.456.789-00')).toThrow()
      expect(() => new CPF('invalid_cpf')).toThrow()
    })
  })

  describe('equals', () => {
    it('should return true when comparing two CPF instances with the same CPF number', () => {
      const cpf1 = new CPF('123.456.789-09')
      const cpf2 = new CPF('12345678909')
      expect(cpf1.equals(cpf2)).toBe(true)
    })

    it('should return false when comparing two CPF instances with different CPF numbers', () => {
      const cpf1 = new CPF('123.456.789-09')
      const cpf2 = new CPF('987.654.321-09')
      expect(cpf1.equals(cpf2)).toBe(false)
    })
  })

  describe('toString', () => {
    it('should return the string representation of the CPF', () => {
      const cpf = new CPF('123.456.789-09')
      expect(cpf.toString()).toBe('12345678909')
    })
  })
})
