const productRepo = require('../repositories/ProductRepo')



function getAll(){
    return productRepo.getAll()
}

async function create(productDTO, session) {
    return productRepo.create(productDTO,session)
}

module.exports = {getAll,create}