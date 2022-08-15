import { Arg, Query, Resolver } from 'type-graphql'
import { ProductModel, IProduct } from '../../models/Product.model'

@Resolver()
export class ProductResolver {
    @Query(() => Boolean)
    products(@Arg("foo") foo: string) {
        return true
    }
}