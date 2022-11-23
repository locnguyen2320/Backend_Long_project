const { validateNumber, validateString } = require("../validations/IsEmpty")

function createProductDetailDto(reqBody, index) {
    const input = reqBody

    const errMessages = []

    if (validateString(input.color) && input.color < 0) {
        errMessages.push(`trường 'productDetail.color' tại index ${index} chưa hợp lệ`)
    }
    if (validateString(input.size) && input.size < 0) {
        errMessages.push(`trường 'productDetail.size' tại index ${index} chưa hợp lệ`)
    }
   

    if (errMessages.length > 0)
                return {errMessage: errMessages.reduce((total,err) => `${total} ${err} ---`,"")}


    return { data: { color: input.color, size: input.size, r_product: input.r_product } }
}

module.exports = {createProductDetailDto}
