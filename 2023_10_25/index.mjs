import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { apiRouter } from './router/routing.mjs';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`${port}`)
})