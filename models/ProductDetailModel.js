const mongoose = require('mongoose')
const abstractModel = require('./AbstractModel')

const productSchema = new mongoose.Schema({
    ...abstractModel,
    color: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true,
        min: 0,
        default: 1
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

const product = mongoose.model("product",productSchema)

module.exports = product