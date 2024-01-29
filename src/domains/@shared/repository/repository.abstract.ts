export abstract class Repository<T> {
  abstract save(entity: T): Promise<T>;
  abstract delete(entity: T): Promise<T>;
  abstract findById(id: string): Promise<T>;
  abstract findAll(): Promise<T[]>;
}