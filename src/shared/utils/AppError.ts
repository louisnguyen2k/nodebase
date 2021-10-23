class AppError extends Error {
  code: number;
  constructor(err: { code: number; message: string }) {
    super(err.message);
    this.code = err.code;
  }
  public with(message?: string): AppError {
    if (message) {
      this.message = message;
    }
    return this;
  }
}
export default AppError;
