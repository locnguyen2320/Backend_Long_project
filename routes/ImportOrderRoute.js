const { Router } = require('express')
const router = Router({ mergeParams: true })

const { CustomError } = require('../errors/CustomError')
const importOrderService = require("../services/ImportOrderService")
const { verifyToken } = require("../middlewares/VerifyToken")
const { createImportOrderDto } = require('../dtos/ImportOrderDTO')

router
    .post("/", verifyToken, async (req, res) => {
        try {
            const importOrderDTO = createImportOrderDto(req.body)
            if (importOrderDTO.hasOwnProperty("errMessage"))
                throw new CustomError(importOrderDTO.errMessage, 400)
            importOderDTO.data['r_user'] = req.user._id
            const createdImportOrder = await importOrderService.create(importOrderDTO.data)
            res.status(201).json(createdImportOrder)
        } catch (error) {
            if (error instanceof CustomError)
                res.status(error.code).json({ message: error.message })
            else
                res.status(500).json("Server has something wrong!!")
            console.error(error.toString())
        }

    })
    .get("/", verifyToken, (req, res) => {
        try {
            return res.status(200).json()
        } catch (error) {
            return res.status(500).json(error.toString())
        }
    })

module.exports = { router }