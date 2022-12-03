const { Router } = require('express')
const router = Router({ mergeParams: true })
const productService = require("../services/productService")
const { createProductDto } = require("../dtos/productDTO")
const { CustomError } = require("../errors/CustomError")

const { default: mongoose } = require('mongoose')

router
    .post("/", async (req, res) => {
        const session = await mongoose.startSession()
        session.startTransaction()
        try {
            const productDTO = createProductDto({...req.body})
            if (productDTO.hasOwnProperty("errMessage"))
                throw new CustomError(productDTO.errMessage, 400)
            const createdproduct = await productService.create({...productDTO.data}, session)

            await session.commitTransaction()
            console.log(createdproduct)
            res.status(201).json(createdproduct)

        } catch (error) {
            await session.abortTransaction()
            session.endSession()

            if (error instanceof CustomError)
                res.status(error.code).json({ message: error.message })
            else
                res.status(500).json({message:"Server has something wrong!!"})
            console.error(error.toString())
        }

    })
    .get("/", async (req, res) => {
        try {
            const products = await productService.getAll()
            return res.status(200).json(products)
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Server has something wrong!!"})
        }
    })

module.exports = { router }