import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: { type: Array },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
