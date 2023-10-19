export default class CPF {
  private value: string

  constructor(cpf: string) {
    cpf = cpf.replace(/\D/g, '')
    if (!this.validateCPF(cpf)) {
      throw new Error('Invalid CPF. Please provide a valid CPF number.')
    }
    this.value = cpf
  }

  equals(other: CPF): boolean {
    return this.value === other.value
  }

  toString(): string {
    return this.value
  }

  private validateCPF(cpf: string): boolean {
    // Remove non-numeric characters and check if the length is valid
    if (cpf.length !== 11) {
      return false
    }
    // Check for known invalid CPFs
    const invalidCPFs = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ]
    if (invalidCPFs.includes(cpf)) {
      return false
    }
    // Calculate and verify the CPF checksum
    const numbers = cpf.split('').map(Number)
    const calculatedChecksum1 = numbers.slice(0, 9).reduce((sum, value, index) => sum + value * (10 - index), 0) % 11
    const calculatedChecksum2 = numbers.slice(0, 10).reduce((sum, value, index) => sum + value * (11 - index), 0) % 11

    const validChecksum1 = calculatedChecksum1 < 2 ? 0 : 11 - calculatedChecksum1
    const validChecksum2 = calculatedChecksum2 < 2 ? 0 : 11 - calculatedChecksum2

    return numbers[9] === validChecksum1 && numbers[10] === validChecksum2
  }
}

// Example usage:
// const validCPF = new CPF('529.982.247-25') // A valid CPF
// const invalidCPF = new CPF('123.456.789-00') // An invalid CPF
// console.log(validCPF.toString()) // Output: "12345678909"
// console.log(invalidCPF.toString()) // Throws an error for an invalid CPF
