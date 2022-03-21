import { secondsToHms } from './secondsToHms.js'

describe('Seconds to hh:mm:ss', () => {
  it('it should sum two numbers', () => {
    expect(secondsToHms(0)).toBe('00:00:00')
    expect(secondsToHms(1)).toBe('00:00:01')
    expect(secondsToHms(60)).toBe('00:01:00')
    expect(secondsToHms(60)).toBe('01:00:00')
  })
})
