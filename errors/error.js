class ConflictError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

class NotFoundError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

module.exports = {ConflictError, NotFoundError};
