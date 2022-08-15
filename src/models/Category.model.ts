import { Schema, model } from 'mongoose';

export interface ICategory {
    name: string;
    subCategories: Array<string>;
}

const categorySchema = new Schema<ICategory>({
    name: { type: String, required: true, maxlength: 100, minlength: 2, unique: true },
    subCategories: Array<String>
});


export const CategoryModel = model<ICategory>('category', categorySchema);