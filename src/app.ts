import './db'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { PingResolver } from './graphql/resolvers/ping'
import { buildSchema } from 'type-graphql'
import cors from "cors"

const app = express()

//cors TODO maybe relocate to another folder and make env variable
//const ORIGIN = 'http://localhost:3000'
const ORIGIN = '*'

const corsOpts: cors.CorsOptions = {
    origin: ORIGIN
};

app.use(cors(corsOpts));


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