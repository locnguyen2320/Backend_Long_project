const productDetailRepo = require('../repositories/ProductDetailRepo')

function create(productDetailDetailDTO, session){
    
    return productDetailRepo.create(productDetailDetailDTO, session)
}

module.exports = {create}