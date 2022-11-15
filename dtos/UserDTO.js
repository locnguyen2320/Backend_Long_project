const { validateString, validateEmail, validatePhone, validateEnum } = require("../validations/IsEmpty")
const UserRoleEnum = require("../enums/UserRole")

function createUserDto(reqBody) {
    console.log(reqBody)
    const input = reqBody

    if (validateString(input.username))
        return { errMessage: "trường 'username' chưa hợp lệ" }
    if (validateString(input.password))
        return { errMessage: "trường 'password' chưa hợp lệ" }
    if (validateString(input.name))
        return { errMessage: "trường 'name' chưa hợp lệ" }
    if (validateEmail(input.email))
        return { errMessage: "trường 'email' chưa hợp lệ" }
    if (validatePhone(input.phone))
        return { errMessage: "trường 'phone' chưa hợp lệ" }
    if (validateEnum(UserRoleEnum, input.role))
        return { errMessage: "trường 'role' chưa hợp lệ" }
    if (validateString(input.address))
        input.address = ""
    return {
        data: {
            username: input.username,
            password: input.password,
            name: input.name,
            email: input.email,
            phone: input.phone,
            role: UserRoleEnum[input.role],
            address: input.address
        }
    }
}

function loginUserDto(reqBody) {
    const input = reqBody
    if (validateString(input.username))
        return { errMessage: "trường 'username' chưa hợp lệ" }
    if (validateString(input.password))
        return { errMessage: "trường 'password' chưa hợp lệ" }
    return {
        data: {
            username: input.username,
            password: input.password,
        }
    }
}

module.exports = { createUserDto, loginUserDto }
