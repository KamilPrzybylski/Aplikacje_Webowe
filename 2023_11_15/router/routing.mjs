// import { createConnection } from 'mysql'
import express from 'express'
// import { PrismaClient } from '@prisma/client'
import { MongoClient, ServerApiVersion } from 'mongodb'

// const prisma = new PrismaClient()
const router = express.Router()
const url = ""
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

// const conn = createConnection({
//     host: '172.25.224.1',
//     user: 'root',
//     password: '',
//     database: 'database'
// })

// conn.connect((err) => {
//     if (err) {
//         throw err
//     }
//     else {
//         console.log('Connected to database')
//     }
// })

const ERR_404 = {
    'Error 404': 'Page not found'
}

router.use((req,res,next) => {
    console.log('Time:', Date.now());
    next()
})

router.get('/', (req, res) => {
    const apiRoutingInfo = {
        '/api': 'API Information',
        '/api/students': 'Students Information',
        '/api/subjects': 'Subjects Information',
        '/api/messages': 'Messages Information',
        '/api/students/:id': 'Specific Student Information',
        '/api/subjects/:id': 'Specific Subject Information'
    }
    res.json(apiRoutingInfo)
})

router.get('/students', async (req, res) => {
    try {
        const db = await client.connect(url)
        const dbo = await db.db("baza_webowe")
        try {
            const result = await dbo.collection("students").find().toArray()
            res.json(result)
        }
        catch(e) {
          throw e
        }
        await db.close()
    }
    catch(e) {
        throw e
    }
})

router.get('/subjects', async (req, res) => {
    try {
        const db = await client.connect(url)
        const dbo = await db.db("baza_webowe")
        try {
            const result = await dbo.collection("subjects").find().toArray()
            res.json(result)
        }
        catch(e) {
          throw e
        }
        await db.close()
    }
    catch(e) {
        throw e
    }
})

router.get('/messages', async (req, res) => {
    try {
        const db = await client.connect(url)
        const dbo = await db.db("baza_webowe")
        try {
            const result = await dbo.collection("contact").find().toArray()
            res.json(result)
        }
        catch(e) {
          throw e
        }
        await db.close()
    }
    catch(e) {
        throw e
    }
})

router.get('/students/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const db = await client.connect(url)
        const dbo = await db.db("baza_webowe")
        const qrr = { id: id }
        try {
            const result = await dbo.collection("students").find(qrr).toArray()
            if(result != null && result != "") {
                res.json(result)
            }
            else {
                res.status(404)
                res.json(ERR_404)
            }
        }
        catch(e) {
          throw e
        }
        await db.close()
    }
    catch(e) {
        throw e
    }
})

router.get('/subjects/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
        const db = await client.connect(url)
        const dbo = await db.db("baza_webowe")
        const qrr = { id: id }
        try {
            const result = await dbo.collection("subjects").find(qrr).toArray()
            if(result != null && result != "") {
                res.json(result)
            }
            else {
                res.status(404)
                res.json(ERR_404)
            }
        }
        catch(e) {
          throw e
        }
        await db.close()
    }
    catch(e) {
        throw e
    }
})

export {router as apiRouter}
