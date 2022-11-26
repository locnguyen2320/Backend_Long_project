const { validateString } = require("../validations/IsEmpty")
function createTrademarkDto(reqBody) {
    const input = reqBody
    
    const errMessages = []

    if (validateString(input.name))
        errMessages.push("trường 'name' chưa hợp lệ")

    if (errMessages.length > 0)
                return {errMessage: errMessages.reduce((total,err) => `${total} ${err} ---`,"")}


    return { data: {name: input.name, img: input.img} }
}

module.exports = { createTrademarkDto }
