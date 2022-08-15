import 'dotenv/config'
import './db'
import express from 'express'
import conifg from './config/app.config'
import { ApolloServer } from 'apollo-server-express'
import { PingResolver } from './graphql/resolvers/ping'
import { ProductResolver } from './graphql/resolvers/ProductResolver'
import { buildSchema } from 'type-graphql'

import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

const app = express()

conifg(app)


import { typeDefs } from './graphql/schema'
import { Query } from './graphql/resolvers/query'

const resolvers = {
    Query
};


export async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    })

    await server.start()

    server.applyMiddleware({ app, path: '/api' })

    return app
}

// export async function startServer() {
//     const server = new ApolloServer({
//         schema: await buildSchema({
//             resolvers: [PingResolver, ProductResolver]
//         }),
//         context: ({ req, res }) => ({ req, res })
//     })

//     await server.start()

//     server.applyMiddleware({ app, path: '/api' })

//     return app
// }