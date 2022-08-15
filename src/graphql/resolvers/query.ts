//TODO this is a test
import { ProductModel, IProduct } from '../../models/Product.model'

export const Query = {

    listProducts: async (parent: any, args: { limit: number, category: String }, context: any, info: any) => {
        //const selectionSet = info.fieldNodes[0].selectionSet.selections.map((elem: any) => elem.name.value)

        if (!args.limit || args.limit < 1 || args.limit > 100) {
            args.limit = 10
        }

        const filterParams: any = {

        }

        try {
            const products = await ProductModel
                .find()
                .limit(args.limit)
            return products
        } catch (err) {
            console.log(err)
        }


    },
    getProduct: async () => {

    }
}

/*
    listMatches: async (parent: any,args: any, context: { client: Db }) => {
        const partidos = await context.client.collection(`${collection}`).find().toArray() as MATCH[];
        return partidos.filter((partidos) => partidos.finalizado != true);
    },
    getMatch: async (parent: any, args: { id: string }, context: { client: Db }) => {
        const valid_id = new ObjectId(args.id);
        const partido = await context.client.collection(`${collection}`).findOne({ _id: valid_id }) as MATCH;
        if (partido) {
            return partido;
        }
        else {
            throw new ApolloError("Not found", "404");
        }
    }
*/