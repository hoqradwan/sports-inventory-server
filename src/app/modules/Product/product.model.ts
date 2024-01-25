import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

// Define the schema
const ProductSchema = new Schema<TProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    sportType: { type: String, required: true },
    brand: { type: String },
    size: { type: String },
    material: { type: String, required: true },
    color: { type: String },
    condition: { type: String, enum: ['new', 'used'] },
    weight: { type: Number }, // Optional
    style: { type: String }, // Optional
}, {
    timestamps: true
});

// Create the model
export const Product = model('Product', ProductSchema);

