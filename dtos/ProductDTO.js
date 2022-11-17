const { validateString } = require("../Validations/IsEmpty")
function createProductDto(reqBody) {
    const input = reqBody
    const errMessages = []

    if (validateString(input.name))
        errMessages.push("trường 'name' chưa hợp lệ")
    if (validateString(input.img))
        errMessages.push("trường 'img' chưa hợp lệ")
    if (validateNumber(input.price))
        errMessages.push("trường 'price' chưa hợp lệ")
    if (errMessages.length > 0)
        return {errMessage: errMessages.reduce((err, index) => `${index}: ` + err + "\n")}

    return { data: { name: input.name, img: input.img, price: input.price } }
}

module.exports = { createProductDto }