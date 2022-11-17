const consignment = require("../models/ConsignmentModel");

const create = ({importPrice, exportPrice, quantity, importedAt, status, r_productDetail}) => {
    return consignment.create({ importPrice, exportPrice, quantity, importedAt, status, r_productDetail });
}

const getAll = () => {
    return consignment.find({ active: true })
}

module.exports = { create, getAll }
