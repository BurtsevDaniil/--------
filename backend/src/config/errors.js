/**
 * Ошибка со статус кодом для правильного контроля запросов.
 * @param {number} statusCode - код ошибки
 */
export class BaseError extends Error {
    statusCode
  
    constructor(statusCode, message) {
      super(message)
  
      Object.setPrototypeOf(this, new.target.prototype)
      this.name = Error.name
      this.statusCode = statusCode
      Error.captureStackTrace(this)
    }
}

export class NotFoundError extends BaseError {
    constructor(message = 'Object not found') {
        super(404, message)
        this.name = NotFoundError.name
    }
}

export class NotEnoughError extends BaseError {
    constructor(message = 'Not enough') {
        super(400, message)
        this.name = NotEnoughError.name
    }
}

export class AlreadyExistsError extends BaseError {
    constructor(message = 'Already exists') {
        super(409, message)
        this.name = AlreadyExistsError.name
    }
}
  
export class InternalServerError extends BaseError {
    constructor(message = 'Internal Server Error') {
        super(500, message)
        this.name = InternalServerError.name
    }
}

export class ValidationError extends BaseError {
  constructor(message = 'Wrong params were passed') {
      super(422, message)
      this.name = InternalServerError.name
  }
}
