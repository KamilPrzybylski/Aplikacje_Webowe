import express from 'express'

const router = express.Router()

const students = [
    { id: 1, name: 'Kamil', surname: 'Przybylski', email: 'kamil@gmail.com' },
    { id: 2, name: 'Jan', surname: 'Kowalski', email: 'jasiuuu420@gmail.com' },
    { id: 3, name: 'Anna', surname: 'Nowak', email: 'zmywara69@gmail.com' },
    { id: 4, name: 'Ambrozy', surname: 'Gwalciciel', email: 'lubie.male-dzieci@gmail.com' },
    { id: 5, name: 'Jakub', surname: 'Rabedix', email: 'bazy.danych@gmail.com' },
    { id: 6, name: 'Miro', surname: 'Siper', email: 'miro.cdv@gmail.com' },
    { id: 7, name: 'Jerzy', surname: 'Sabiniewicz', email: 'zjuju@gmail.com' },
    { id: 8, name: 'Tomasz', surname: 'Karolak', email: 'ludwik.kox@gmail.com' },
    { id: 9, name: 'Endrju', surname: 'Dudus', email: 'l_prezydentrp@gmail.com' },
    { id: 10, name: 'Donaldzik', surname: 'Tusk', email: 'ucieklem.dobrukseli2137@gmail.com' }
]

const subjects = [
    { id: 1, name: 'Jezyk Polski', hoursAWeek: 3 },
    { id: 2, name: 'Jezyk Angielski', hoursAWeek: 3 },
    { id: 3, name: 'Jezyk Niemiecki', hoursAWeek: 2 },
    { id: 4, name: 'Matematyka', hoursAWeek: 4 },
    { id: 5, name: 'Geografia', hoursAWeek: 1 },
    { id: 6, name: 'Aplikacje Webowe', hoursAWeek: 4 },
    { id: 7, name: 'W-F', hoursAWeek: 3 },
    { id: 8, name: 'Informatyka', hoursAWeek: 2 },
    { id: 9, name: 'TiDA', hoursAWeek: 2 },
    { id: 10, name: 'Chemia', hoursAWeek: 1 }
]

const ERR_404 = {'Error 404': 'Page not found'}

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
    res.json(students)
})

router.get('/subjects', (req, res) => {
    res.json(subjects)
})

router.get('/students/:id', (req, res) => {
    const id = req.params.id
    const student = students.find(students => students.id == id)
    if (student){
        res.json(student)
    }
    else {
        res.status(404)
        res.json(ERR_404)
    }
})

router.get('/subjects/:id', (req, res) => {
    const id = req.params.id
    const subject = subjects.find(subjects => subjects.id == id)
    if (subject){
        res.json(subject)
    }
    else {
        res.status(404)
        res.json(ERR_404)
    }
})

export {router as apiRouter}