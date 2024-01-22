export default class AssertResponse {
  readonly pass: boolean;
  readonly message: string;

  constructor(pass: boolean, message?: string) {
    this.pass = pass;
    this.message = message || "";
  }

  static pass(): AssertResponse {
    return new AssertResponse(true);
  }

  static fail(message: string) {
    return new AssertResponse(false, message);
  }
}
