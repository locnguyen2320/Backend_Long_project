const { CustomError } = require('../errors/CustomError')
const userRepo = require('../repositories/UserRepo')
const bcrypt = require("bcrypt")
const { signToken } = require('../helpers/signToken')

async function register(userDTO, session){
    try {
        const createdUser =  await userRepo.create(userDTO, session)
        const signedToken = signToken(createdUser)
        return Promise.resolve(signedToken)
    } catch (error) {
        return Promise.reject(new CustomError(error.toString(),500))
    }
}

async function login(userDTO){
    try {
        const foundUser = await userRepo.getByUsername(userDTO.username)
        if (!foundUser)
            throw new CustomError("user không tồn tại", 400)
        const isSamePassword = await bcrypt.compareSync(userDTO.password, foundUser.password)
        if (!isSamePassword)
            throw new CustomError("mật khẩu không trùng khớp", 400)
        const signedToken = signToken(foundUser)
        return Promise.resolve(signedToken)
    } catch (error) {
        return Promise.reject(new CustomError(error.toString(),500))
    }
}

module.exports = {register,login}