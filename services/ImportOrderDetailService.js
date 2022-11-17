const importOrderDetailRepo = require('../repositories/ImportOrderDetailRepo')

function getAll(){
    return importOrderDetailRepo.getAll()
}

function create(importOrderDetailDTO){
    
    return importOrderDetailRepo.create(importOrderDetailDTO)
}

module.exports = {getAll,create,}