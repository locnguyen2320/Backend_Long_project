const categoryRepo = require('../repositories/CategoryRepo')

function getAll() {
    return categoryRepo.getAll()
}

async function create(categoryDTO) {
    const session = await mongoose.startSession();
    return session.withTransaction(categoryRepo.create(categoryDTO))
}

function getByName(name) {
    return categoryRepo.getByName(name)
}

function getById(id) {
    return categoryRepo.getById(id)
}

function deleteOne(id) {
    return session.withTransaction(categoryRepo.deleteOne(id))
}

module.exports = { getAll, create, getById, getByName }