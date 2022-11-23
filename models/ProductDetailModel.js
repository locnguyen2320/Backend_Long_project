const mongoose = require('mongoose')
const abstractModel = require('./AbstractModel')

const productSchema = new mongoose.Schema({
    ...abstractModel,
    color: {
        type: String,
        require: true
    },
    size: {
        type: String,
        maxLength:4,
        minLength:1
    },
    img: {
        type:String,
        default: ""
    },
    r_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
})

const productDetail = mongoose.model("productDetail",productSchema)

module.exports = productDetail