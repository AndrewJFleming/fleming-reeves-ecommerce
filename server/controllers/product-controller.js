import Product from "../models/Product.js";

//GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET PRODUCT BY ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

//CREATE
export const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(409).json({ message: error.message });
    console.log(err);
  }
};

// UPDATE
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
