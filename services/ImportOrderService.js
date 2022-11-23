const importOrderRepo = require('../repositories/ImportOrderRepo')

const importOrderDetailService = require("./ImportOrderDetailService")
const consignmentService = require("./ConsignmentService")

function getAll() {
    return importOrderRepo.getAll()
}

async function create(importOrderDTO, session) {
    try {
        const details = importOrderDTO.r_importOrderDetails
        const promiseCreateImportOrderDetails = []
        const promiseCreatedConsignments = []

        details.forEach(detail => {
            promiseCreateImportOrderDetails.push(
                importOrderDetailService.create({
                    quantity: detail.quantity,
                    price: detail.importPrice,
                    r_productDetail: detail.r_productDetail
                }, session))
            promiseCreatedConsignments.push(
                consignmentService.create({
                    importPrice: detail.importPrice,
                    exportPrice: detail.exportPrice,
                    quantity: detail.quantity,
                    importedAt: importOrderDTO.importedAt,
                    r_productDetail: detail.r_productDetail
                }, session))
        });

        await Promise.all(promiseCreatedConsignments)
        const createdImportProductDetails = await Promise.all(promiseCreateImportOrderDetails)
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