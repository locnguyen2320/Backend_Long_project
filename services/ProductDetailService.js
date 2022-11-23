const productDetailRepo = require('../repositories/ProductDetailRepo')

function getAll(){
    return productDetailRepo.getAll()
}

function create(productDetailDTO, session){
    return productDetailRepo.create(productDetailDTO, session)
}

module.exports = {getAll,create,}