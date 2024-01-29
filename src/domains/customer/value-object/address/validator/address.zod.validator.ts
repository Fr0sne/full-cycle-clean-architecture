import { ValidatorInterface } from "../../../../@shared/validator/validator.interface";
import { Address } from "../address";
import zod from "zod";

export class AddressZodValidator implements ValidatorInterface<Address> {
  validate(entity: Address) {
    try {
      const schema = zod.object({
        street: zod.string().min(3).max(255),
        zipCode: zod.string().min(3).max(255),
        city: zod.string().min(3).max(255),
        state: zod.string().min(2).max(255),
        country: zod.string().min(3).max(255),
      })
      return schema.parse({
        street: entity.street,
        zipCode: entity.zipCode,
        city: entity.city,
        state: entity.state,
        country: entity.country,
      })
    } catch (err) {
      if (err instanceof zod.ZodError) {
        for (const cause of err.errors) {
          entity.notification.addError(`${cause.path.join('.')}: ${cause.message}`.toLowerCase())
        }
      }
    }
  }
  static create() {
    return new AddressZodValidator();
  }
}