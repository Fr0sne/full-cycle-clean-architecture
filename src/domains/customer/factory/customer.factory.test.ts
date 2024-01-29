import { describe, test, expect } from 'vitest'
import { CustomerFactory } from './customer.factory'
import { Address } from '../value-object/address/address'

describe('CustomerFactory', () => {
  test('should create with address', () => {
    const name = 'John Doe'
    const address = {
      street: '123 Main St',
      city: 'Anytown',
      state: 'NY',
      zipCode: '12345',
      country: 'US'
    }
    const customer = CustomerFactory.createWithAddress(name, new Address(address))
    expect(customer.name).toBe(name)
    expect({
      street: customer.address.street,
      city: customer.address.city,
      state: customer.address.state,
      zipCode: customer.address.zipCode,
      country: customer.address.country
    }).toEqual(address)
  })
  test('should create without address', () => {
    const name = 'John Doe'
    const customer = CustomerFactory.create(name)
    expect(customer.name).toBe(name)
    expect(customer.address).toBeUndefined()
  })
})