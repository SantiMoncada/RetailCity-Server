import mongoose from './../index'
import { ProductModel, IProduct } from '../../models/Product.model';


const productsFile: any[] = require('./data/products.json') //TODO ask how to import array of json in typescritp


const products: IProduct[] = productsFile.map(product => {
    return {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        categories: product.category.map((cat: any) => cat.name),
        manufacturer: product.manufacturer,
    }
})

const db = mongoose.connection;

db.on('open', () => {
    //deletes all current products on the DB
    ProductModel
        .deleteMany()
        .then(res => {
            console.log(res)
            return ProductModel.create(products)
        })
        .then(res => {
            console.log(res)
            mongoose.connection.close()
        })
        .catch(err => {
            console.log(err)
            mongoose.connection.close()
        })

})