const mongoose = require("mongoose");
const abstractModel  = require("./AbstractModel");
const EXPORTORDERSTATUSENUM = require("../enums/ExportOrderStatus")

const exportOrderSchema = new mongoose.Schema({
    ...abstractModel,
    totalBill: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: Object.values(EXPORTORDERSTATUSENUM).map(v => v),
        default: 'new'
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["in_stock", "out_of_stock", "comming_out_of_stock"],
        default: "in_stock"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    address: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        maxLength: 11
    },
    email: {
        type: String,
        required: true
    },
    r_exportOrderDetail:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "exportOrderDetail"
    }]
});

const exportOrder = mongoose.model("exportOrder", exportOrderSchema);

module.exports = exportOrder;