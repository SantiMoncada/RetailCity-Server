import express from 'express'
import cors from 'cors'
import logger from 'morgan'

const ORIGIN = process.env.ORIGIN || '*'

export = (app: express.Application) => {

    const corsOpts: cors.CorsOptions = {
        //credentials: true, //dont know what this does
        origin: ORIGIN
    }
    app.use(cors(corsOpts))
    //app.use(logger('dev'))

    return app
}