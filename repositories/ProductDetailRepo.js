const productDetail = require("../models/productDetailModel");

const create = async ({ color, size, img, r_product},session) => {
    return productDetail.create([{ color, size, img, r_product }],{session});
}

const getAll = () => {
    return productDetail.find({ active: true });
};

module.exports = {
    create,    
    getAll
};