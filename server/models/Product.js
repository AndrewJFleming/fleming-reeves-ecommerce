import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    categories: { type: Array },
    isFeatured: { type: Boolean, default: false },
    squareThumbUrl: { type: String, required: true },
    largeUrl: { type: String, required: true },
    fullsizeUrl: { type: String, required: true },
    variants: { type: Array, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
