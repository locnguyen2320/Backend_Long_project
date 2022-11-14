const { validateString } = require("../Validations/IsEmpty")
function createProductDto(reqBody) {
    console.log(reqBody)
    const input = reqBody
    
    if (validateString(input.name))
        return { errMessage: "trường 'name' chưa hợp lệ" }
    if (validateString(input.img))
        return { errMessage: "trường 'img' chưa hợp lệ" }
    if (validateString(input.price))
        return { errMessage: "trường 'price' chưa hợp lệ" }   

    return { data: {name: input.name, img: input.img,price: input.price} }
}

module.exports = { createProductDto }