import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import attachCookies from "../utils/attachCookies.js";
import crypto from "crypto";
import sendVerificationEmail from "../utils/sendVerificationEmail.js";
import sendResetPasswordEmail from "../utils/sendResetPasswordEmail.js";

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

  const verificationToken = crypto.randomBytes(40).toString("hex");

  const user = await User.create({ email, name, password, verificationToken });
  // const origin = "http://localhost:5000";
  const origin = "https://codenowschool.onrender.com";

  await sendVerificationEmail({
    email: user.email,
    name: user.name,
    verificationToken: user.verificationToken,
    origin: origin,
  });

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      verificationToken: user.verificationToken,
    },
    msg: "registration successful. Please confirm email",
  });
};

// VERIFY EMAIL
const verifyEmail = async (req, res) => {
  const { verificationToken, email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError("Verification failed");
  }
  if (user.verificationToken !== verificationToken) {
    throw new BadRequestError("Verification failed");
  }

  user.isVerified = true;
  user.verified = Date.now();
  // user.verificationToken = "";

  await user.save();

  res.status(StatusCodes.OK).json({
    msg: "Email verified",
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
  if (!user.isVerified) {
    throw new UnAuthenticatedError("Please verify your email");
  }
  const token = user.createJWT();
  user.password = undefined;
  attachCookies({ res, token });
  res.status(StatusCodes.OK).json({ user, msg: `${user.name}, welcome back!` });
};

// Forgot Password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new BadRequestError("Please provide a valid email");
  }
  const user = await User.findOne({ email });

  if (user) {
    const passwordToken = crypto.randomBytes(70).toString("hex");
    // const origin = "http://localhost:5000";
    const origin = "https://codenowschool.onrender.com";
    sendResetPasswordEmail({
      name: user.name,
      email: user.email,
      token: passwordToken,
      origin: origin,
    });
    const tenMinutes = 1000 * 60 * 10;
    const passwordTokenExpirtationDate = new Date(Date.now() + tenMinutes);

    user.passwordToken = passwordToken;
    user.passwordTokenExpirtationDate = passwordTokenExpirtationDate;

    await user.save();
  }

  res
    .status(StatusCodes.OK)
    .json({ email, msg: "check email for reset password link" });
};
// Reset Password
const resetPassword = async (req, res) => {
  const { token, email, password } = req.body;

  // const tempOrigin = req.get("origin");
  // const protocol = req.protocol;
  // const host = req.get("host");
  // const forwardedHost = req.get("x-forwarded-host");
  // const forwardedProtocol = req.get("x-forwarded-proto");

  if (!token || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email });
  if (user) {
    const currentDate = new Date();
    if (
      user.passwordToken === token &&
      user.passwordTokenExpirtationDate > currentDate
    ) {
      user.password = password;
      // user.passwordToken = null
      // user.passwordTokenExpirtationDate = null

      await user.save();
    }
  }

  res.status(StatusCodes.OK).json({ msg: "password reset successfully" });
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
export {
  register,
  login,
  getCurrentUser,
  logout,
  verifyEmail,
  resetPassword,
  forgotPassword,
};
