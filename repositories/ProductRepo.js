const product = require("../models/ProductModel")

const create = async ({ price, name, description, r_category, r_trademark }, session) => {
    const createdProduct = await product.create([{ price, name, description, r_category, r_trademark }], { session })
    return product.findById(createdProduct[0]._id).populate([
        "r_trademark",
        "r_category",
    ]).session(session)
}

const getAll = () => {
    return product.find({ active: true })
        .populate([
            "r_trademark",
            "r_category",
            "r_productDetails"
        ])
}

const pushOneProductDetail = ({ id, r_productDetail }, session) => {
    return product.findOneAndUpdate(
        { _id: id },
        { $push: { r_productDetails: r_productDetail, updatedAt: new Date() } },
        { new: true }
    ).session(session)
}

module.exports = {
    create,
    getAll,
    pushOneProductDetail
}