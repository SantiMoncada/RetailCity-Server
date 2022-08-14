import express from 'express'
import cors from 'cors'
import logger from 'morgan'

//cors TODO maybe relocate to another folder and make env variable
//const ORIGIN = 'http://localhost:3000'
const ORIGIN = '*'

export = (app: express.Application) => {

    const corsOpts: cors.CorsOptions = {
        //credentials: true, //dont know what this does
        origin: ORIGIN
    }
    app.use(cors(corsOpts))
    //app.use(logger('dev'))

    return app
}