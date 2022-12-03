const { Router } = require('express')
const router = Router({ mergeParams: true })

const bcrypt = require("bcrypt")
const { CustomError } = require('../errors/CustomError')
const { createUserDto, loginUserDto } = require('../dtos/UserDTO')
const userService = require("../services/UserService")
const { verifyToken } = require("../middlewares/VerifyToken")

const { default: mongoose } = require('mongoose')

router
    .post("/register", async (req, res) => {
        const session = await mongoose.startSession()
        session.startTransaction()
        try {
            const userDTO = createUserDto(req.body)
            if (userDTO.hasOwnProperty("errMessage"))
                throw new CustomError(userDTO.errMessage, 400)
            const hashPassword = await bcrypt.hashSync(userDTO.data.password, 10)
            const signToken = await userService.register({...userDTO.data, password: hashPassword},session)
            await session.commitTransaction()
            return res.status(201).json(signToken)
        } catch (error) {
            await session.abortTransaction()
            session.endSession()

            if (error instanceof CustomError)
                res.status(error.code).json({ message: error.message })
            else
                res.status(500).json({message: error.toString()})
        }

    })
    .post("/login", async (req, res) => {
        try {
            const userDTO = loginUserDto(req.body)
            if (userDTO.hasOwnProperty("errMessage"))
                throw new CustomError(userDTO.errMessage, 400)
            const signedToken = await userService.login(userDTO.data)
            return res.status(201).json({ signedToken })
        } catch (error) {
            if (error instanceof CustomError)
                res.status(error.code).json({ message: error.message })
            else
                res.status(500).json({message:"Server has something wrong!!"})
        }

    })
    .get("/", verifyToken, (req, res) => {
        try {
            return res.status(200).json(req.user)
        } catch (error) {
        
            res.status(500).json({message:"Server has something wrong!!"})
        }
    })

module.exports = { router }