const categoryRepo = require('../repositories/CategoryRepo')

function getAll(){
    return categoryRepo.getAll()
}

function create(categoryDTO){
    
    return categoryRepo.create(categoryDTO)
}

function getByName(name){
    return categoryRepo.getByName(name)
}

function getById(id){
    return categoryRepo.getById(id)
}

module.exports = {getAll,create,getById,getByName}