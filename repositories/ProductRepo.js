const product = require("../models/ProductModel");

const create = async ({ name, description, r_productDetail, r_category, r_trademark }, session) => {
    return product.create([{ name, description, r_productDetail, r_category, r_trademark }], { session });
}

const getAll = () => {
    return product.find({ active: true })
        .populate("r_trademark")
        .populate("r_category")
        .populate("r_productDetail");
};

module.exports = {
    create,
    getAll
};