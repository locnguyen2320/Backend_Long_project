const productRepo = require('../repositories/ProductRepo')

function getAll(){
    return productRepo.getAll()
}

function create(productDTO){
    
    return productRepo.create(productDTO)
}

function getByName(name){
    return productRepo.getByName(name)
}

function getById(id){
    return productRepo.getById(id)
}

module.exports = {getAll,create,getById,getByName}