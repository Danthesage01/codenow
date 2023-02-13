import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import attachCookies from "../utils/attachCookies.js";

// REGISTER
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use. Try another!");
  }

  const user = await User.create({ email, name, password });
  // const origin = "http://localhost:3000";
  const token = user.createJWT();
  attachCookies({ res, token });
  res.status(StatusCodes.CREATED).json({
    user: { email: user.email, name: user.name },
    msg: "registration successful",
  });
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("User doesn't exist");
  }
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    throw new UnAuthenticatedError("Email or password incorrect");
  }
  const token = user.createJWT();
  user.password = undefined;
  attachCookies({ res, token });
  res.status(StatusCodes.OK).json({ user, msg: `${user.name}, welcome back!` });
};

// Get Current User
const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ user, msg: `${user.name} is the current user` });
};

// Logout USER

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: `logged out successfully` });
};
export { register, login, getCurrentUser, logout };
