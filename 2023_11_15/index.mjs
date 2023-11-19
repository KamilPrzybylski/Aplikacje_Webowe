import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { apiRouter } from './router/routing.mjs'
import { MongoClient, ServerApiVersion } from 'mongodb'

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const url = "mongodb+srv://kamilprzybylski:Placki123@cluster0.2zn7bdh.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

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
    try {
        const db = await client.connect(url)
        const dbo = await db.db("baza_webowe")
        let newData = {
            'imie': dataToSend.imie,
            'email': dataToSend.email,
            'temat': dataToSend.tematy,
            'wiadomosc': dataToSend.wiadomosc
        }
        try {
            await dbo.collection('contact').insertOne(newData)
        }
        catch (e) {
            throw e
        }
        await db.close()
    }
    catch (e) {
        throw e
    }
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`${port}`)
})