const categoryRepo = require('../repositories/CategoryRepo')

function getAll() {
    return categoryRepo.getAll()
}

async function create(categoryDTO, session) {
    console.log("service", categoryDTO)
    return categoryRepo.create(categoryDTO,session)
}

function getByName(name) {
    return categoryRepo.getByName(name)
}

function getById(id) {
    return categoryRepo.getById(id)
}

function deleteOne(id,session) {
    return session.withTransaction(categoryRepo.deleteOne(id,session))
}

module.exports = { getAll, create, getById, getByName,deleteOne }
