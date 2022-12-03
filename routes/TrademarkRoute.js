const { Router } = require('express')
const router = Router({ mergeParams: true })
const trademarkService = require("../services/TrademarkService")
const { createTrademarkDto } = require("../dtos/TrademarkDTO")
const { CustomError } = require("../errors/CustomError")
const { uploadFile } = require('../middlewares/UploadFile')

const { default: mongoose } = require('mongoose')

router
    .post("/",uploadFile,  async (req, res) => {
        const session = await mongoose.startSession()
        session.startTransaction()

        try {
            let img = ""
            if(req.file !== null && req.file !== undefined)
                img = req.file.filename
            const trademarkDTO = createTrademarkDto({...req.body,img})
            if (trademarkDTO.hasOwnProperty("errMessage"))
                throw new CustomError(trademarkDTO.errMessage, 400)

            const createdTrademark = await trademarkService.create(trademarkDTO.data, session)

            await session.commitTransaction()
            res.status(201).json(createdTrademark)
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
            const trademarks = await trademarkService.getAll()
            return res.status(200).json(trademarks)
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Server has something wrong!!"})
        }
    })

module.exports = { router }