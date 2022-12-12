const productDetail = require("../models/productDetailModel")

const create = ({ color, size, img, r_product},session) => {
    return productDetail.create([{ color, size, img, r_product }],{session})
}

const update = ({id,color, size, img, r_product, r_consignment},session) => {
    return productDetail.findOneAndUpdate({_id: id},{color, size, img, r_product, r_consignment, updatedAt: new Date()}, {new:true}).session(session)
}

const deleteOne = (id,session) => {
    return productDetail.findOneAndUpdate({_id: id},{active: false}, {new:true}).session(session)
}

const updateNullConsignment = ({id, r_consignment},session) => {
    return productDetail.findOneAndUpdate({_id: id, r_consignment: null},{r_consignment, updatedAt: new Date()}).session(session)
}
const getAll = ({r_product, r_consignment}, session) => {
    return productDetail.find({ r_product: r_product, r_consignment: null },{r_consignment, createdAt: new Date() }).session(session)
}

module.exports = {
    create,
    update,
    updateNullConsignment,
    deleteOne,
    getAll
}