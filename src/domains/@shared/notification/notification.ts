

export class Notification {
  erros: string[] = [];
  constructor() {
    this.erros = [];
  }
  static create() {
    return new Notification();
  }
  hasError(): boolean {
    return this.erros.length > 0;
  }
  addError(error: string) {
    this.erros.push(error);
  }
  getErrors(): string[] {
    return this.erros;
  }
}