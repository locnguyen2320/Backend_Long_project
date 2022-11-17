const consignmentRepo = require('../repositories/ConsignmentRepo')

function getAll(){
    return consignmentRepo.getAll()
}

function create(consignmentDTO){
    
    return consignmentRepo.create(consignmentDTO)
}

module.exports = {getAll,create,}