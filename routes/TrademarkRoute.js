const { Router } = require('express')
const router = Router({ mergeParams: true })
const trademarkService = require("../services/TrademarkService")
const { createTrademarkDto } = require("../dtos/TrademarkDTO")
const { CustomError } = require("../errors/CustomError")
const { uploadFile } = require('../middlewares/UploadFile')
const trademark = require('../models/TrademarkModel')

router
    .post("/",uploadFile,  async (req, res) => {
        try {
            let img = ""
            if(req.file !== null && req.file !== undefined)
                img = req.file.filename
            const trademarkDTO = createTrademarkDto({...req.body,img})
            if (trademarkDTO.hasOwnProperty("errMessage"))
                throw new CustomError(trademarkDTO.errMessage, 400)
            const createdTrademark = await trademarkService.create(trademarkDTO.data)
            res.status(201).json(createdTrademark)
        } catch (error) {
            if (error instanceof CustomError)
                res.status(error.code).json({ message: error.message })
            else
                res.status(500).json("Server has something wrong!!")
            console.error(error.toString())
        }

    })
    .get("/", async (req, res) => {
        try {
            const trademarks = await trademarkService.getAll()
            return res.status(200).json(trademarks)
        } catch (error) {
            res.status(500).json(error)
        }
    })
    .delete('/:id',(req,res)=>{
        trademarkService.deleteOne(req.params.id)
        .then(trademark=>{
            return res.status(200).json(trademark);
        })
        .catch(err=>{
            res.status(400).json({message:err})
        })
    })

module.exports = { router }