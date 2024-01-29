import { describe, expect, it, test } from 'vitest'
import { Address } from './address'


describe('Address Validator', () => {
  test('should be a valid address', () => {
    const sut = Address.create({
      street: 'Rua 1',
      zipCode: '12345678',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
    })
    sut.validate()
    expect(sut.notification.hasError()).toBe(false)
  })
  test('should not be a valid address', () => {
    const sut = Address.create({
      street: 'Rua 1',
      zipCode: '12345678',
      city: 'São Paulo',
      state: 'SP',
      country: 'Brasil',
    })
    sut.validate()
    expect(sut.notification.hasError()).toBe(false)
  })
})