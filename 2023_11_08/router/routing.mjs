import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
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

router.get('/students', async (req, res) => {
    const students = await prisma.students.findMany()

    if(students == "") {
        res.json(ERR_404)
    }
    else {
        res.json(students)
    }
})

router.get('/subjects', async (req, res) => {
    const subjects = await prisma.subjects.findMany()

    if(subjects == "") {
        res.json(ERR_404)
    }
    else {
        res.json(subjects)
    }
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
})

export {router as apiRouter}
