const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/templates/index.html`)
})

app.get('/kontakt', (req, res) => {
    res.sendFile(`${__dirname}/templates/kontakt.html`)
})

app.listen(port, () => {
    console.log(`${port}`)
})