import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { apiRouter } from './router/routing.mjs'
import { PrismaClient } from '@prisma/client'

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const prisma = new PrismaClient()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/templates/index.html`)
})

app.get('/kontakt', (req, res) => {
    res.sendFile(`${__dirname}/templates/kontakt.html`)
})

app.post('/kontakt', async (req, res) => {
    console.log(req.body)
    const dataToSend = req.body
    await prisma.messages.create({
        data: {
            imie: dataToSend.imie,
            email: dataToSend.email,
            temat: dataToSend.tematy,
            wiadomosc: dataToSend.wiadomosc
        }
    }).catch((e)=>{
        throw e
    })
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`${port}`)
})
