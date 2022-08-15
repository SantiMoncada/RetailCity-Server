import mongoose from './../index'
import { CategoryModel, ICategory } from '../../models/Category.model';

const categoriesFile: any[] = require('./data/categories.json') //TODO ask how to import array of json in typescritp


const categories: ICategory[] = categoriesFile.map(category => {
    return {
        name: category.name,
        subCategories: category.subCategories.map((cat: any) => cat.name),
    }
})

const db = mongoose.connection;

db.on('open', () => {
    //deletes all current categories on the DB
    CategoryModel
        .deleteMany()
        .then(res => {
            console.log(res)
            return CategoryModel.create(categories)
        })
        .then(res => {
            console.log(res)
            mongoose.connection.close()
        })
        .catch(err => console.log(err))
})
