const consignmentRepo = require('../repositories/ConsignmentRepo')

function getAll(){
    return consignmentRepo.getAll()
}

function create(consignmentDTO,session){
    
    return consignmentRepo.create(consignmentDTO, session)
}

module.exports = {getAll,create}