import { createConnection} from 'mysql'
import express from 'express'

const conn = createConnection({
    host: '172.25.224.1',
    user: 'root',
    password: '',
    database: 'database'
})

conn.connect((err) => {
    if (err) {
        throw err
    }
    else {
        console.log('Connected to database')
    }
})

const router = express.Router()

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

router.get('/students', (req, res) => {
    const students = []
    const sql = "SELECT * FROM students;"
    conn.query(sql, (err, result)=>{
        if (err) {
            throw err
        }
        else {
            result.forEach((res) => {
                const result = JSON.parse(JSON.stringify(res))
                students.push(result)
            })
            res.json(students)
        }   
    })
})

router.get('/subjects', (req, res) => {
    const subjects = []
    const sql = "SELECT * FROM subjects;"
    conn.query(sql, (err, result)=>{
        if (err) {
            throw err
        }
        else {
            result.forEach((res) => {
                const result = JSON.parse(JSON.stringify(res))
                subjects.push(result)
            })
            res.json(subjects)
        }   
    })
})

router.get('/students/:id', (req, res) => {
    const id = req.params.id
    const student = []
    const sql = `SELECT * FROM students WHERE id = ${id};`
    conn.query(sql, (err, result)=>{
        if (err) {
            throw err
        }
        else {
            if (result.length) {
                result.forEach((res) => {
                    const result = JSON.parse(JSON.stringify(res))
                    student.push(result)
                })
                res.json(student)
            }
            else {
                res.status(404)
                res.json(ERR_404)
            }
        }   
    })
})

router.get('/subjects/:id', (req, res) => {
    const id = req.params.id
    const subject = []
    const sql = `SELECT * FROM subjects WHERE id = ${id};`
    conn.query(sql, (err, result)=>{
        if (err) {
            throw err
        }
        else {
            if (result.length) {
                result.forEach((res) => {
                    const result = JSON.parse(JSON.stringify(res))
                    subject.push(result)
                })
                res.json(subject)
            }
            else {
                res.status(404)
                res.json(ERR_404)
            }
        }   
    })
})

export {router as apiRouter}