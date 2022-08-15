import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://santi:Do7a3C92hJN18hXP@thebestcluster.xv6go.mongodb.net/RetailCity-DB' // TODO add env variable, dosent work on local

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        )
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    })

export = mongoose