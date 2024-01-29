import { AddressZodValidator } from "./validator/address.zod.validator";
import { Notification } from "../../../@shared/notification/notification";

interface AddressInterface {
  street: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

export class Address {
  street: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  validator: AddressZodValidator;
  notification: Notification;

  constructor({
    street,
    zipCode,
    city,
    state,
    country
  }: AddressInterface) {
    this.street = street;
    this.zipCode = zipCode;
    this.city = city;
    this.state = state;
    this.country = country;
    this.validator = AddressZodValidator.create();
    this.notification = Notification.create();
  }

  static create({
    street,
    zipCode,
    city,
    state,
    country
  }: AddressInterface): Address {
    return new Address({
      street,
      zipCode,
      city,
      state,
      country
    });
  }

  validate() {
    this.validator.validate(this)
  }
}