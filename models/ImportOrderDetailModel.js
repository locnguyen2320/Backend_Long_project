const mongoose = require('mongoose')
const abstractModel = require('./AbstractModel')

const importOrderDetailSchema = new mongoose.Schema({
    ...abstractModel,
    quantity: {
        type: Number,
        require: true,
        min: 0
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    r_productDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productDetail"
    },
})

const importOrder = mongoose.model("importOrderDetail", importOrderDetailSchema)

module.exports = importOrder