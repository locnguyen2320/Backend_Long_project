const product = require("../models/ProductModel");

const create = async ({ name, price }) => {
    return product.create({ name, price })
}

const getAll = () => {
    return product.find({ active: true }).populate("trademark").populate("category");
};

const getByName = (name) => {
    return product.findOne({ name });
};

const getById = (id) => {
    return product.findById(id);
};

const deleteOne = (id) => {
    return product.findOneAndUpdate({ _id: id }, { active: false });
};

const updateOne = (id, {name,price}) => {
    return product
        .findOneAndUpdate({ _id: id }, {name, price}, { new: true })
        .populate("brand")
        .populate("category");
};

module.exports = {
    create,    
    deleteOne,
    updateOne,
    getAll,
    getByName,
    getById
};