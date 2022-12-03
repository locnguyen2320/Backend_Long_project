const exportOrder = require("../models/ExportOrderModel")

const create = ({totalBill, r_user, address, name, phone, email, r_exportOrderDetails},session) => {
    return exportOrder.create([{ totalBill, r_user, address, name, phone, email, r_exportOrderDetails }],{session})
}

const updateStatus = ({id, status, isPaid},session) => {
    return exportOrder.findOneAndUpdate({_id: id}, {status,isPaid,updatedAt: new Date()},{new: true}).session(session)
}
module.exports = { create, updateStatus }
