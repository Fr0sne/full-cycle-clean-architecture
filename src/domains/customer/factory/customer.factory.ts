import { Customer } from "../entity/customer.entity";
import { Address } from "../value-object/address/address";

export class CustomerFactory {
  public static create(name: string) {
    return new Customer(name)
  }

  public static createWithAddress(name: string, address: Address) {
    const customer = new Customer(name)
    customer.changeAddress(address)
    return customer
  }
}