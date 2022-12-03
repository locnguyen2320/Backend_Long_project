const consignment = require("../models/ConsignmentModel")

const create = ({  quantity, importedAt, status, r_productDetail }, session) => {
    return consignment.create([{  quantity, importedAt, status, r_productDetail }], { session })
}

const createMany = (creatingConsignments, session) => {
    return consignment.create(creatingConsignments, { session })
}

const getAll = () => {
    return consignment.find({ active: true })
}

const findByProductDetailId = (r_productDetail, session) => {
    return consignment.find({r_productDetail, status: {$in : ["in_stock", "comming_out_of_stock"]}}).session(session)
}

const deleteByProductDetailId = (productDetailId,session) => {
    return consignment.findOneAndUpdate({r_productDetail: productDetailId},{active: false}, {new:true}).session(session)
}


module.exports = { create, getAll, createMany, findByProductDetailId, deleteByProductDetailId }
