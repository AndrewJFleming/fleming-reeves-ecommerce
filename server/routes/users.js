import express from "express";

import {
  login,
  register,
  updateUser,
  updateFavorites,
  deleteUser,
} from "../controllers/user-controller.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

// Login is post because we must send auth formData from frontend to backend
router.post("/login", login);
router.post("/register", register);
router.put("/:id", updateUser);
router.put("/favorites/:id", updateFavorites);
router.delete("/:id", deleteUser);

export default router;
