import http from 'http'

const host = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req, res)=>{
    const url = req.url

    if (url === '/') {

    } else {

    }
}

)
server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}/`)
})