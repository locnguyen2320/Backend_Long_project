const mongoose = require("mongoose")
const abstractModel  = require("./AbstractModel")

const exportOrderDetailSchema = new mongoose.Schema({
    ...abstractModel,
    quantity: {
        type: Number,
        min: 0,
        required: "trường 'quantity' bắt buộc phải truyền"
    },
    price: {
        type: Number,
        min: 0,
        required: "trường 'price' bắt buộc phải truyền"
    },
    r_productDetail: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "productDetail"
    }
})

const exportOrderDetail = mongoose.model("exportOrderDetail", exportOrderDetailSchema)

module.exports = exportOrderDetail