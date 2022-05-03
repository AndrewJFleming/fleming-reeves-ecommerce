import express from "express";

import {
  login,
  register,
  updateUser,
  deleteUser,
} from "../controllers/user-controller.js";

const router = express.Router();

// Login is post because we must send auth formData from frontend to backend
router.post("/login", login);
router.post("/register", register);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
