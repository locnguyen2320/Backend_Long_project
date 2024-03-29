const mongoose = require("mongoose")
const abstractModel  = require("./AbstractModel")
const CONSIGNMENTSTATUS = require("../enums/ConsignmentStatus")

const consignmentSchema = new mongoose.Schema({
    ...abstractModel,
    quantity: {
        type: Number,
        required: "trường 'quantity' bắt buộc phải truyền",
        min: 1
    },
    importedAt: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        enum: Object.values(CONSIGNMENTSTATUS).map(v => v),
        default: "new"
    },
    r_productDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productDetail"
    }
})

const consignment = mongoose.model("consignment", consignmentSchema)

module.exports = consignment