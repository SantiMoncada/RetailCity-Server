import 'reflect-metadata'
import { startServer } from './app'

const PORT = 3000 // TODO move to env variables
const main = async () => {
    const app = await startServer()
    app.listen(PORT)
    console.log(`Server on port ${PORT}`)
}

main();