const importOrderDetail = require("../models/ImportOrderDetailModel");

const create = ({quantity, price, r_productDetail}) => {
    return importOrderDetail.create({ quantity, price, r_productDetail });
}

const getAll = () => {
    return importOrderDetail.find({ active: true })
}

module.exports = { create, getAll }
