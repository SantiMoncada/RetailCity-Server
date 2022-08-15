import 'reflect-metadata'
import { startServer } from './app'

const PORT = process.env.PORT || 5005

const main = async () => {
    const app = await startServer()
    app.listen(PORT)
    console.log(`Server on port ${PORT}`)
}

main();