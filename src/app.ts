import './db'
import express from 'express'
import conifg from './config/app.config'
import { ApolloServer } from 'apollo-server-express'
import { PingResolver } from './graphql/resolvers/ping'
import { buildSchema } from 'type-graphql'

const app = express()

conifg(app)

export async function startServer() {
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    })

    await server.start()

    server.applyMiddleware({ app, path: '/api' })

    return app
}