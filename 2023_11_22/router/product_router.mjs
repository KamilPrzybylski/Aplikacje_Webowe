import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { PrismaClient } from '@prisma/client'

const router = new express.Router()
const prisma = new PrismaClient()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

router.use(express.static('public'))
router.use(express.json())
router.use(express.urlencoded({extended: true}))

const ERR_404 = {
    'Error 404': 'Page not found'
}

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next()
})

router.get('/create', (req, res) => {
    res.sendFile(`${__dirname}/templates/products/c_products.html`)
})

router.post('/create', async (req, res) => {
    console.log(req.body)
    const dataToSend = req.body
    await prisma.Products.create({
        data: {
            ProductName: dataToSend.p_name,
            Category: dataToSend.p_cat,
            Price: Number(dataToSend.p_pri)
        }
    })
    res.redirect('/')
})

router.get('/read', async (req, res) => {
    const products = await prisma.Products.findMany()

    if(products == "") {
        res.json(ERR_404)
    }
    else {
        res.json(products)
    }
})

router.get('/read/:id', async (req, res) => {
    const id = Number(req.params.id)
    const products = await prisma.Products.findMany({
        where: {
            ProductID: id
        }
    })

    if(products == "") {
        res.json(ERR_404)
    }
    else {
        res.json(products)
    }
})

router.get('/update', (req, res) => {
    res.sendFile(`${__dirname}/templates/products/u_products.html`)
})

router.post('/update', async (req, res) => {
    console.log(req.body)
    const dataToSend = req.body
    await prisma.Products.update({
        where: {
            ProductID: Number(dataToSend.p_id)
        },
        data: {
            Price: Number(dataToSend.p_pri)
        }
    })
    res.redirect('/')
})

router.get('/delete', (req, res) => {
    res.sendFile(`${__dirname}/templates/products/d_products.html`)
})

router.post('/delete', async (req, res) => {
    console.log(req.body)
    const dataToSend = req.body
    const product = await prisma.Products.findUnique({
        where: {
            ProductID: Number(dataToSend.p_id)
        }
    })
    if (product) {
        await prisma.Products.delete({
            where: {
                ProductID: Number(dataToSend.p_id)
            }
        })
    }
    res.redirect('/')
})

export { router as p_router }