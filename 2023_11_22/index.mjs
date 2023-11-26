import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { p_router } from './router/product_router.mjs'

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/products', p_router)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/router/templates/index.html`)
})

app.listen(port, () => {
    console.log(`${port}`)
})