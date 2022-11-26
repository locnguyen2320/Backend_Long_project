const { validateString, validateEmail, validatePhone, validateEnum } = require("../validations/IsEmpty")
const USERROLEENUM = require("../enums/UserRole")

function createUserDto(reqBody) {
    const input = reqBody
    const errMessages = []

    if (validateString(input.username))
        errMessages.push("trường 'username' chưa hợp lệ")
    if (validateString(input.password))
        errMessages.push("trường 'password' chưa hợp lệ")
    if (validateString(input.name))
        errMessages.push("trường 'name' chưa hợp lệ")
    if (validateString(input.email))
        errMessages.push("trường 'email' chưa hợp lệ")
    if (validateString(input.phone))
        errMessages.push("trường 'phone' chưa hợp lệ")
    if (validateString(input.address)) {
        input.address = ""
    }
    if (validateEnum(USERROLEENUM, input.role))
        errMessages.push("trường 'role' chưa hợp lệ")

    if (errMessages.length > 0)
                return {errMessage: errMessages.reduce((total,err) => `${total} ${err} ---`,"")}

    return {
        data: {
            username: input.username,
            password: input.password,
            name: input.name,
            email: input.email,
            phone: input.phone,
            role: input.role,
            address: input.address
        }
    }
}

function loginUserDto(reqBody) {
    const input = reqBody
    const errMessages = []

    if (validateString(input.username))
        errMessages.push("trường 'username' chưa hợp lệ")
    if (validateString(input.password))
        errMessages.push("trường 'password' chưa hợp lệ")

    if (errMessages.length > 0)
                return {errMessage: errMessages.reduce((total,err) => `${total} ${err} ---`,"")}
    return {
        data: {
            username: input.username,
            password: input.password,
        }
    }
}

    module.exports = { createUserDto, loginUserDto }
