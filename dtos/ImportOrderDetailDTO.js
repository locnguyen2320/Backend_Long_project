const { validateNumber, validateString } = require("../validation/validation")

function createImportOrderDetailDto(reqBody, index) {
    const input = reqBody

    const errMessages = []

    if (validateNumber(input.quantity) && input.quantity < 0) {
        errMessages.push(`trường 'importOrderDetail.quantity' tại index ${index} chưa hợp lệ`)
    }
    if (validateNumber(input.price) && input.price < 0) {
        errMessages.push(`trường 'importOrderDetail.price' tại index ${index} chưa hợp lệ`)
    }
    if (validateString(input.r_productDetail)) {
        errMessages.push(`trường 'importOrderDetail.r_productDetail' tại index ${index} chưa hợp lệ`)
    }

    if (errMessages.length > 0)
        return { errMessage: errMessages.reduce((total, err) => `${total} ${err} ---`, "") }


    return { data: { quantity: input.quantity, price: input.price, r_productDetail: input.r_productDetail } }
}

module.exports = { createImportOrderDetailDto }
