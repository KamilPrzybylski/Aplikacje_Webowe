import http from 'http'
import {readFile} from 'fs/promises'

const host = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res)=>{
    const url = req.url

    if (url === '/') {
        res.statusCode = 200

        const html = await readFile('templates/index.html')
        res.setHeader('content-type', 'text/html')
        res.write(html)
        res.end()
    } else if (url === '/dziekujemy') {
        res.statusCode = 200

        const html_dzie = await readFile('templates/thanks.html')
        res.setHeader('content-type', 'text/html')
        res.write(html_dzie)
        res.end()
    } else if (url === '/api') {
        res.statusCode = 200

        const API = [
            {
                id: 1,
                name: 'Kowalski'
            },
            {
                id: 2,
                name: 'Przybylski'
            }
        ]

        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(API))
        res.end()
    } else if (url === '/kontakt') {
        req.on('end', async() => {
            
        })
    }
}

)
server.listen(port, host, ()=>{
    console.log(`Server running at http://`,host,`:`,port,`/`)
})