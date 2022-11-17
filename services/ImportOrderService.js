const importOrderRepo = require('../repositories/ImportOrderRepo')

const importOrderDetailService = require("./ImportOrderDetailService")
const consignmentService = require("./ConsignmentService")
const { default: mongoose } = require('mongoose')

function getAll() {
    return importOrderRepo.getAll()
}

async function create(importOrderDTO) {
    try {
        const session = await mongoose.startSession()
        const details = importOrderDTO.r_importOrderDetails
        const promiseCreateImportOrderDetails = []
        const promiseCreatedConsignments = []
    
        details.forEach(detail => {
            promiseCreateImportOrderDetails.push(
                importOrderDetailService.create({
                    quantity: detail.quantity,
                    price: detail.importPrice,
                    r_productDetail: detail.r_productDetail
                }))
            promiseCreatedConsignments.push(
                consignmentService.create({
                    importPrice: detail.importPrice,
                    exportPrice: detail.exportPrice,
                    quantity: detail.quantity,
                    importedAt: importOrderDTO.importedAt,
                    r_productDetail: detail.r_productDetail
                },{session}))
        });
        const result = session.withTransaction(async () => {
            await Promise.all(promiseCreatedConsignments)
            const createdImportProductDetails = await Promise.all(promiseCreateImportOrderDetails)
            const createdImportOrder = await importOrderRepo.create({
                totalPrice: importOrderDTO.totalPrice,
                r_importOrderDetails: createdImportProductDetails,
                r_user: importOrderDTO.r_user
            })
            if(createdImportOrder){
                session.commitTransaction()
            }
        })
        return Promise.resolve(result)
        
    } catch (error) {
        throw new CustomError(error.toString(), 500)
    }

}

module.exports = { getAll, create }