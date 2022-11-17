const importOrder = require("../models/ImportOrderModel");

const create = ({totalPrice, r_productDetails, r_user}) => {
    return importOrder.create({ totalPrice, r_productDetails, r_user });
}

const getAll = () => {
    return importOrder.find({ active: true })
}

module.exports = { create, getAll }
