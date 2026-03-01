import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    keyFeatures: [String],
    slug: { type: String, unique: true },
    categoryId: String,
    brand: String,
    images: [String],
    price: { type: Number, required: true },
    originalPrice: Number,
    reviews: {
      1: { type: Number, default: 0 },
      2: { type: Number, default: 0 },
      3: { type: Number, default: 0 },
      4: { type: Number, default: 0 },
      5: { type: Number, default: 0 },
    },
    averageRating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    isNew: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    stock: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
