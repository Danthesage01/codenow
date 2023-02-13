import CustomErrorAPI from "./customError.js";
import { StatusCodes } from "http-status-codes";

class BadRequestError extends CustomErrorAPI{
 constructor(message){
  super(message)
  this.statusCode = StatusCodes.BAD_REQUEST
 }
}

export default BadRequestError