const { Router } = require('express')
const router = Router({ mergeParams: true })
const categoryService = require("../services/CategoryService")
const { createCategoryDto } = require("../dtos/CategoryDTO")
const { CustomError } = require("../errors/CustomError")

router
    .post("/", async (req, res) => {
        try {
            const categoryDTO = createCategoryDto(req.body)
            if (categoryDTO.hasOwnProperty("errMessage"))
                throw new CustomError(categoryDTO.errMessage, 400)
            const createdCategory = await categoryService.create(categoryDTO.data)
            res.status(201).json(createdCategory)

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
            const categories = await categoryService.getAll()
            return res.status(200).json(categories)
        } catch (error) {
            res.status(500).json(error)
        }
    })

module.exports = { router }