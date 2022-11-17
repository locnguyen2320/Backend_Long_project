const { validateString } = require("../validations/IsEmpty")
function createTrademarkDto(reqBody) {
    console.log(reqBody)
    const input = reqBody
    
    const errMessages = []

    if (validateString(input.name))
        errMessages.push("trường 'name' chưa hợp lệ")
    if (validateString(input.img))
        errMessages.push("trường 'img' chưa hợp lệ")
    if (errMessages.length > 0)
        return {errMessage: errMessages.reduce((err, index) => `${index}: ` + err + "\n")}

    return { data: {name: input.name, img: input.img} }
}

module.exports = { createTrademarkDto }
