const { validateString, validateObjectId } = require("../validation/validation")
function createProductDto(reqBody) {
    const input = reqBody
    const errMessages = []

    if (validateString(input.name))
        errMessages.push("trường 'name' chưa hợp lệ")
    if (validateString(input.price))
        errMessages.push("trường 'price' chưa hợp lệ")
    if (validateString(input.description))
        errMessages.push("trường 'description' chưa hợp lệ")
    if (validateObjectId(input.r_category))
        errMessages.push("trường 'category' chưa hợp lệ")
    if (validateObjectId(input.r_trademark))
        errMessages.push("trường 'trademark' chưa hợp lệ")
    if (errMessages.length > 0)
        return { errMessage: errMessages.reduce((total, err) => `${total} ${err} ---`, "") }


    return { data: { name: input.name, price: input.price, description: input.description, r_category: input.r_category, r_trademark: input.r_trademark } }
}

module.exports = { createProductDto }