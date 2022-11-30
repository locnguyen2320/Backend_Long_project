const product = require("../models/ProductModel");

const create = async ({ price, name, description, r_category, r_trademark }, session) => {
    return product.create([{price, name, description, r_category, r_trademark }], { session });
}

const getAll = () => {
    return product.find({ active: true })
        .populate("r_trademark")
        .populate("r_category")
        .populate("r_productDetail");
};

const pushOneProductDetail = ({id, r_productDetail},session) => {
    return product.findOneAndUpdate(
        { _id: id }, 
        { $push: { r_productDetails: r_productDetail, updatedAt: new Date() } },
        {new: true}
    ).session(session);
};

module.exports = {
    create,
    getAll,
    pushOneProductDetail
};