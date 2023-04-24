/**
 * Base domain exception.
 */
export class ApplicationException extends Error {
  data: unknown;

  constructor(message?: string, data?: unknown) {
    super(message);

    this.data = data;

    // Restore prototype chain
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
