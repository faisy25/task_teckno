import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  getUser,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/refreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.get("/user/:id", getUser);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
