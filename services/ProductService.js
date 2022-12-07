const productRepo = require('../repositories/ProductRepo')

function getAll(){
    return productRepo.getAll()
}

function create(productDTO, session){
    return productRepo.create(productDTO, session)
}

function getById(id){
    return productRepo.getById(id)
}

function getByCategoryId(id){
    return productRepo.getByCategoryId(id)
}

module.exports = {getAll,create, getById, getByCategoryId}
