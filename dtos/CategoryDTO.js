const { validateString } = require("../validations/IsEmpty")
function createCategoryDto(reqBody) {
    const input = reqBody
    const errMessages = []

    if (validateString(input.name))
        errMessages.push("trường 'name' chưa hợp lệ")
    if (validateString(input.img))
        errMessages.push("trường 'img' chưa hợp lệ")

    if(errMessages.length > 0)
        return {errMessage: errMessages.reduce((total,err) => `${total} ${err} ---`,"")}
    return { data: { name: input.name, img: input.img } }
}

function updateCategoryDto(reqBody){
    console.log(reqBody)
    const input = reqBody

    if(validateString(input.name))
        return {errMessage:"trường 'name' không hợp lệ"}
    if(validateString(input.img))
        return {errMessage:"trường 'img' không hợp lệ"}
    return {data:{name:input.name,img:input.img} }
}


module.exports = { createCategoryDto }