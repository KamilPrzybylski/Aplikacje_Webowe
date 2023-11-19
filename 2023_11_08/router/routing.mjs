// import { createConnection } from 'mysql'
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

// const conn = createConnection({
//     host: '172.25.224.1',
//     user: 'root',
//     password: '',
//     database: 'database'
// })

// conn.connect((e) => {
//     if (e) {
//         throw e
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
        '/api/students/:id': 'Specific Student Information',
        '/api/subjects/:id': 'Specific Subject Information'
    }
    res.json(apiRoutingInfo)
})

router.get('/students', async (req, res) => {
    const students = await prisma.students.findMany()

    if(students == "") {
        res.json(ERR_404)
    }
    else {
        res.json(students)
    }

    // const students = []
    // const sql = "SELECT * FROM students;"
    // conn.query(sql, (e, result)=>{
    //     if (e) {
    //         throw e
    //     }
    //     else {
    //         result.forEach((res) => {
    //             const result = JSON.parse(JSON.stringify(res))
    //             students.push(result)
    //         })
    //         res.json(students)
    //     }   
    // })
})

router.get('/subjects', async (req, res) => {
    const subjects = await prisma.subjects.findMany()

    if(subjects == "") {
        res.json(ERR_404)
    }
    else {
        res.json(subjects)
    }

    // const subjects = []
    // const sql = "SELECT * FROM subjects;"
    // conn.query(sql, (e, result)=>{
    //     if (e) {
    //         throw e
    //     }
    //     else {
    //         result.forEach((res) => {
    //             const result = JSON.parse(JSON.stringify(res))
    //             subjects.push(result)
    //         })
    //         res.json(subjects)
    //     }   
    // })
})

router.get('/students/:id', async (req, res) => {
    const id = Number(req.params.id)
    const student = await prisma.students.findMany({
        where: {
            id: id
        }
    })
    
    if(student == "") {
        res.json(ERR_404)
    }
    else {
        res.json(student)
    }

    // const student = []
    // const sql = `SELECT * FROM students WHERE id = ${id};`
    // conn.query(sql, (e, result)=>{
    //     if (e) {
    //         throw e
    //     }
    //     else {
    //         if (result.length) {
    //             result.forEach((res) => {
    //                 const result = JSON.parse(JSON.stringify(res))
    //                 student.push(result)
    //             })
    //             res.json(student)
    //         }
    //         else {
    //             res.status(404)
    //             res.json(ERR_404)
    //         }
    //     }   
    // })
})

router.get('/subjects/:id', async (req, res) => {
    const id = Number(req.params.id)
    const subject = await prisma.subjects.findMany({
        where: {
            id: id
        }
    })
    
    if(subject == "") {
        res.json(ERR_404)
    }
    else {
        res.json(subject)
    }

    // const subject = []
    // const sql = `SELECT * FROM subjects WHERE id = ${id};`
    // conn.query(sql, (e, result)=>{
    //     if (e) {
    //         throw e
    //     }
    //     else {
    //         if (result.length) {
    //             result.forEach((res) => {
    //                 const result = JSON.parse(JSON.stringify(res))
    //                 subject.push(result)
    //             })
    //             res.json(subject)
    //         }
    //         else {
    //             res.status(404)
    //             res.json(ERR_404)
    //         }
    //     }   
    // })
})

export {router as apiRouter}
