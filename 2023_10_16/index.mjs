import express from 'express'
import { readFile } from 'fs/promises'
import { writeFile } from "fs/promises"
const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.get('/', (req, res) => {

})

app.get('/kontakt', (req, res) => {

})

app.listen(port, hostname, () => {
    console.log(`${port}`)
})