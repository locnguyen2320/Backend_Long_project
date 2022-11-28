const consignmentRepo = require('../repositories/ConsignmentRepo')

function getAll(){
    return consignmentRepo.getAll()
}

function create(consignmentDTO,session){
    
    return consignmentRepo.create(consignmentDTO, session)
}

function createMany(consignments,session){
    
    return consignmentRepo.createMany(consignments, session)
}

module.exports = {getAll,create, createMany}