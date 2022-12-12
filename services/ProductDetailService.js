const productDetailRepo = require('../repositories/ProductDetailRepo')
const productRepo = require('../repositories/ProductRepo')
const { CustomError } = require('../errors/CustomError')
const consignmentRepo = require('../repositories/ConsignmentRepo')

async function create(productDetailDetailDTO, session){
    try {
        const createdProductDetail = await productDetailRepo.create(productDetailDetailDTO, session)
        await productRepo.pushOneProductDetail({id: productDetailDetailDTO.r_product, r_productDetail: createdProductDetail},session)
        return Promise.resolve(createdProductDetail)
    } catch (error) {
        (error)
        return Promise.reject(new CustomError(error.toString(),500))
    }
}

async function update(productDetailDetailDTO, session){
    try {
        const updatedProductDetail = await productDetailRepo.update(productDetailDetailDTO, session)
        return Promise.resolve(updatedProductDetail)
    } catch (error) {
        (error)
        return Promise.reject(new CustomError(error.toString(),500))
    }
}

async function deleteOne(productDetailId, session){
    try {
        await productDetailRepo.deleteOne(productDetailId,session)
        return Promise.resolve({message: "xóa thành công"})
    } catch (error) {
        return Promise.reject(new CustomError(error.toString(),500))
    }
}
function getAll() {
    return productDetailRepo.getAll()
}





module.exports = {create, update, deleteOne, getAll}