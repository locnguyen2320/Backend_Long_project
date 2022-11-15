const { validateString } = require("../validations/IsEmpty")
function createTrademarkDto(reqBody) {
    console.log(reqBody)
    const input = reqBody
    
    if (validateString(input.name))
        return { errMessage: "trường 'name' chưa hợp lệ" }
    if (validateString(input.img))
        return { errMessage: "trường 'img' chưa hợp lệ" }
    return { data: {name: input.name, img: input.img} }
}

module.exports = { createTrademarkDto }
