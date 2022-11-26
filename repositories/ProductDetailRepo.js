const productDetail = require("../models/productDetailModel");

const create = ({ color, size, img, r_product},session) => {
    return productDetail.create([{ color, size, img, r_product }],{session});
}

module.exports = {
    create
};