import { StatusCodes } from "http-status-codes";

class CustomErrorAPI extends Error{
 constructor(message){
  super(message)
 }
}

export default CustomErrorAPI