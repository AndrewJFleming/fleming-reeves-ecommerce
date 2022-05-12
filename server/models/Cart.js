import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
