const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/templates/index.html`)
})

app.get('/kontakt', (req, res) => {
    res.sendFile(`${__dirname}/templates/kontakt.html`)
})

app.post('/kontakt', (req, res) => {
    console.log(req.body)
    res.setHeader('/', "text")
})

app.get('/api', (req, res) => {
    res.sendFile(`${__dirname}/templates/kontakt.html`)
})

app.listen(port, () => {
    console.log(`${port}`)
})