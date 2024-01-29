import { describe, expect, test } from 'vitest'
import { Customer } from './customer.entity'
import { Address } from '../value-object/address/address'

describe('Customer', () => {
  test('should create a customer', () => {
    const customer = new Customer('John Doe')
    expect(customer.name).toEqual('John Doe')
  })

  test('should not activate a customer without address', () => {
    const customer = new Customer('John Doe')

    expect(() => customer.activate()).toThrowError(Error('Address is required'))
  })

  test('should activate a customer', () => {
    const customer = new Customer('John Doe')
    const address = {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'US'
    }
    customer.changeAddress(new Address(address))
    customer.activate()
    expect(customer.active).toEqual(true)
  })


  test('should add reward points to a customer', () => {
    const customer = new Customer('John Doe')
    customer.addRewardPoints(100)
    expect(customer.rewardPoints).toEqual(100)
  })

  test('should change address of a customer', () => {
    const customer = new Customer('John Doe')
    const address = {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'US'
    }
    customer.changeAddress(new Address(address))

    expect({
      street: customer.address.street,
      city: customer.address.city,
      state: customer.address.state,
      zipCode: customer.address.zipCode,
      country: customer.address.country
    }).toMatchObject(address)
  })
})