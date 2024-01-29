import { Entity } from "../../@shared/entity/entity.abstract";
import { Address } from "../value-object/address/address";

export class Customer extends Entity {
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(name: string, id?: string) {
    super(id);
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  activate() {
    if (!this._address) {
      throw new Error('Address is required');
    }
    this._active = true;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  get address(): Address {
    return this._address;
  }

  get active(): boolean {
    return this._active;
  }

  changeAddress(address: Address) {
    this._address = address;
  }
}