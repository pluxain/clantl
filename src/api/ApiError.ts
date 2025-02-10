export type ApiErrorKind =
  | "Not Found"
  | "Internal Server Error"
  | "Unknown Api Error";

export class ApiError extends Error {
  status: number;
  kind: ApiErrorKind;

  constructor(status: number, kind: ApiErrorKind, message: string) {
    super(message);
    this.status = status;
    this.kind = kind;
  }
}

export class HttpNotFoundError extends ApiError {
  constructor(message: string) {
    super(404, "Not Found", message);
  }
}

export class InternalServerError extends ApiError {
  constructor(message: string) {
    super(500, "Internal Server Error", message);
  }
}
