import express from "express";
const router = express.Router();

import {
  register,
  login,
  getCurrentUser,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../controllers/authControllers.js";
import authMiddleware from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/verify-email").post(verifyEmail);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").post(resetPassword);

router.route("/getCurrentUser").get(authMiddleware, getCurrentUser);

export default router;
