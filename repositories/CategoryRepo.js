const category = require("../models/CategoryModel");

const create = ({ name, img }) => {
    return category.create({ name, img });
}

const getAll = () => {
    return category.find({ active: true })
}

// const getWithPagination = (paginationOption) => {
//     return category.paginate({active:true},paginationOption)
// }

const getByName = (name) => {
    return category.findOne({ name })
}

const deleteOne = (id) => {
    return category.findOneAndUpdate({ _id: id }, { active: false })
}

const updateOne = (id, { name, img }) => {
    return category.findOneAndUpdate({ _id: id }, { name, img }, { new: true });
}

module.exports = { create, getByName, getAll,  deleteOne, updateOne }
