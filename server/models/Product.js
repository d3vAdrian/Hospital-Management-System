import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:true
    },
    price: Number,
    description: {
      type: String,
      required:true
    },
    category: {
      type: String,
      required:true
    },
    manufacturer: {
      type: String,
      required:true
    },
    currency: {
      type: String,
      required:true
    },
    reorderLevel: String,
    reorderCount: Number,
    volume: Number,
    rating: String,
    quantity: Number,
    
    measurement:{
      type: String,
      required: true
    },
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
