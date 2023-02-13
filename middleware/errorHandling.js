import { StatusCodes } from "http-status-codes";

const errorHandlingMiddleware = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later.",
  };
  if (err.name === "ValidationError") {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(". ")
      .slice(6)
      .replace(`${(`${err.errors.password.value}`)}`, "")
      .replace( "` (``)", "");
  }
  if (err.code && err.code === 11000) {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.msg = `${Object.values(
      err.keyValue
    )} already exist. Provide a new ${Object.keys(err.keyValue)}`;
  }

  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }
  // res.status(customError.statusCode).json({ msg: err });
  res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandlingMiddleware;
