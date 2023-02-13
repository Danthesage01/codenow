import CustomErrorAPI from "./customError.js";

import { StatusCodes } from "http-status-codes";

class NotFoundError extends CustomErrorAPI{
 constructor(message){
super(message)
this.statusCode = StatusCodes.NOT_FOUND
 }
}

export default NotFoundError