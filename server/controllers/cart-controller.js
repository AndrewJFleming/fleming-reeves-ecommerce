import Cart from "../models/Cart.js";

//CREATE
export const createCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(409).json({ message: error.message });
    console.log(err);
  }
};

//GET ALL CART
// export const getCarts = async (req, res) => {
//   try {
//     const carts = await Cart.find();
//     res.status(200).json(carts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

//GET CART BY ID
// export const getCartById = async (req, res) => {
//   try {
//     const cart = await Cart.findById(req.params.id);
//     res.status(200).json(cart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

//UPDATE CART
// export const updateCart = async (req, res) => {
//   try {
//     const updatedCart = await Cart.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedCart);
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// };

//DELETE CART
// export const deleteCart = async (req, res) => {
//   try {
//     await Cart.findByIdAndDelete(req.params.id);
//     res.status(200).json("Cart deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
