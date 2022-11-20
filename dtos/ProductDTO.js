const { validateString } = require("../Validations/IsEmpty")
function createProductDto(reqBody) {
    const input = reqBody
    const errMessages = []

    if (validateString(input.name))
        errMessages.push("trường 'name' chưa hợp lệ")
    if (validateString(input.description))
        errMessages.push("trường 'price' chưa hợp lệ")
    if (validateString(input.r_category))
        errMessages.push("trường 'category' chưa hợp lệ")
    if (validateString(input.r_trademark))
        errMessages.push("trường 'trademark' chưa hợp lệ")
    if (errMessages.length > 0)
        return { errMessage: errMessages.reduce((total, err) => `${total} ${err} ---`, "") }


    return { data: { name: input.name, img: input.img, price: input.price } }
}

module.exports = { createProductDto }