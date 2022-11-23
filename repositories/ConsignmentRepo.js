const consignment = require("../models/ConsignmentModel");

const create = ({importPrice, exportPrice, quantity, importedAt, status, r_productDetail},session) => {
    return consignment.create([{ importPrice, exportPrice, quantity, importedAt, status, r_productDetail }],{session});
}

const getAll = () => {
    return consignment.find({ active: true })
}

module.exports = { create, getAll }
