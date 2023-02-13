import express from "express";
const router = express.Router();

import {
  register,
  login,
  getCurrentUser,
  logout,
} from "../controllers/authControllers.js";
import authMiddleware from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/getCurrentUser").get(authMiddleware, getCurrentUser);

export default router;
