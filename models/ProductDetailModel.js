const mongoose = require('mongoose')
const abstractModel = require('./AbstractModel')
const SIZEENUM = require('../enums/Size')
const COLORENUM = require('../enums/Color')

const productSchema = new mongoose.Schema({
    ...abstractModel,
    color: {
        type: String,
        enum: Object.values(COLORENUM).map(v => v),
        default: "black"
    },
    size: {
        type: String,
        enum: Object.values(SIZEENUM).map(v => v),
        default: "40"
    },
    img: {
        type:String,
        default: ""
    },
    r_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    r_consignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'consignment'
    }
})

const productDetail = mongoose.model("productDetail",productSchema)

module.exports = productDetail