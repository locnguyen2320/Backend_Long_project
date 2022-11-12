const { validateString } = require("../Validations/IsEmpty")
function createCategoryDto(reqBody) {
    console.log(reqBody)
    const input = reqBody
    
    if (validateString(input.name))
        return { errMessage: "trường 'name' chưa hợp lệ" }
        
    return { data: {name: input.name, img: input.img} }
}

module.exports = { createCategoryDto }