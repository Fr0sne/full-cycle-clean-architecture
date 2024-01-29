import { Notification } from "../notification/notification";
import { randomUUID } from "node:crypto";

export abstract class Entity {
  public notification: Notification;
  protected id: string;
  constructor(id?: string) {
    this.notification = Notification.create();
    this.id = id || randomUUID();

  }

}