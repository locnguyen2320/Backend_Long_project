const importOrderRepo = require('../repositories/ImportOrderRepo')
const productDetailRepo = require("../repositories/ProductDetailRepo")

const importOrderDetailService = require("./ImportOrderDetailService")
const consignmentService = require("./ConsignmentService")

const { CustomError } = require('../errors/CustomError')

function getAll() {
    return importOrderRepo.getAll()
}

async function create(importOrderDTO, session) {
    try {
        const details = importOrderDTO.r_importOrderDetails
        const creatingConsignments = []
        const updatingProductDetails = []
        details.forEach(detail => {
            creatingConsignments.push(
                {
                    quantity: detail.quantity,
                    importedAt: importOrderDTO.importedAt,
                    r_productDetail: detail.r_productDetail
                }
            )
        });

        const createdConsignments = await consignmentService.createMany(creatingConsignments, session)
        createdConsignments.forEach(consignment => {
            updatingProductDetails.push(productDetailRepo.updateNullConsignment({id: consignment.r_productDetail, r_consignment: consignment._id},session))    
        })
        await Promise.all(updatingProductDetails)
        const createdImportProductDetails = await importOrderDetailService.createMany(details, session)
        const createdImportOrder = await importOrderRepo.create({
            totalPrice: importOrderDTO.totalPrice,
            r_importOrderDetails: createdImportProductDetails,
            r_user: importOrderDTO.r_user
        }, session)
        return Promise.resolve(createdImportOrder)

    } catch (error) {
        throw new CustomError(error.toString(), 500)
    }

}

module.exports = { getAll, create }