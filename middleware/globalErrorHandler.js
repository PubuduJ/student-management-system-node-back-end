const {ConflictError, NotFoundError} = require("../errors/error");

const errorHandlerMiddleWare = async (err, req, res, next) => {
  if (err instanceof ConflictError || err instanceof NotFoundError) {
    return res.status(err.statusCode).json({ message: err.message });
  } else {
    if (err.errors[0].message) return res.status(404).json({ message: err.errors[0].message });
    else {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = errorHandlerMiddleWare;
