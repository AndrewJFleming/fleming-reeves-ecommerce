import express from "express";

import {
  createCart,
  //   getCarts,
  //   getCartById,
  //   updateCart,
  //   deleteCart,
} from "../controllers/cart-controller.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

//CLIENT ROUTES
router.post(
  "/",
  // auth,
  createCart
);

//ADMIN ROUTES
// router.get("/", getCarts);
// router.get("/find/:id", getCartById);
// router.put(
//   "/:id",
//   // auth,
//   updateCart
// );
// router.delete(
//   "/:id",
//   // auth,
//   deleteCart
// );

export default router;
