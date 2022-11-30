const consignment = require("../models/ConsignmentModel");

const create = ({  quantity, importedAt, status, r_productDetail }, session) => {
    return consignment.create([{  quantity, importedAt, status, r_productDetail }], { session });
}

const createMany = (creatingConsignments, session) => {
    return consignment.create(creatingConsignments, { session });
}

const getAll = () => {
    return consignment.find({ active: true })
}

const findByProductDetailId = (r_productDetail, session) => {
    return consignment.find({r_productDetail, status: "in_stock"}).session(session);
}

module.exports = { create, getAll, createMany, findByProductDetailId }
