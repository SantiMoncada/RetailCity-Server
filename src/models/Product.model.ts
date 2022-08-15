import { Schema, model } from 'mongoose';

export interface IProduct {
    name: string;
    description: string;
    price: number;
    image: string;
    categories: Array<string>;
    manufacturer: string;
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true, maxlength: 100 },
    description: String,
    price: { type: Number, required: true, min: 0 },
    image: { type: String, default: 'https://res.cloudinary.com/dp9hznwku/image/upload/v1660568634/RetailCity/PlaceholderProductImage_sn4zqg.jpg' },
    categories: Array<String>,
    manufacturer: String
});


export const ProductModel = model<IProduct>('product', productSchema);