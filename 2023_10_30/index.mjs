import express from 'express'
import { createConnection} from 'mysql'
import path from 'path'
import { fileURLToPath } from 'url';
import { apiRouter } from './router/routing.mjs';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const conn = createConnection({
    host: '172.25.224.1',
    user: 'root',
    password: '',
    database: 'database'
})

conn.connect((e) => {
    if(e) {
        throw e
    }
    else {
        console.log('Connected to database')
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

app.post('/kontakt', (req, res) => {
    console.log(req.body)
    const dataToSend = req.body
    const valuesToSend = Object.values(dataToSend)
    const sql = "INSERT INTO messages (imie, email, temat, wiadomosc) VALUES (?)"

    conn.query(sql, [valuesToSend], (e) => {
        if(e) {
            throw e
        }
        else {
            console.log('Added to db')
            res.redirect('/')
        }
    })
})

app.listen(port, () => {
    console.log(`${port}`)
})
