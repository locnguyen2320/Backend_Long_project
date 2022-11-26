const { Router } = require('express')
const router = Router({ mergeParams: true })
const productService = require("../services/productService")
const { createProductDto } = require("../dtos/productDTO")
const { CustomError } = require("../errors/CustomError")
const {uploadFile} = require("../middlewares/UploadFile")
const { verifyToken } = require("../middlewares/VerifyToken")

const { default: mongoose } = require('mongoose')
const product = require('../models/ProductModel')

router
.post("/", async (req, res) => {
    const session = await mongoose.startSession()
    session.startTransaction()

    try {
        const productDTO = createProductDto(req.body)
        if (productDTO.hasOwnProperty("errMessage"))
            throw new CustomError(productDTO.errMessage, 400)
      
        const createdProduct = await productService.create(productDTO.data, session)

        await session.commitTransaction()
        res.status(201).json(createdProduct)
    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        if (error instanceof CustomError)
            res.status(error.code).json({ message: error.message })
        else
            res.status(500).json("Server has something wrong!!")
        console.error(error.toString())
    }

})
    .get("/", async (req, res) => {
        try {
            const categories = await productService.getAll()
            return res.status(200).json(categories)
        } catch (error) {
            res.status(500).json(error)
        }
    })
   

module.exports = { router }