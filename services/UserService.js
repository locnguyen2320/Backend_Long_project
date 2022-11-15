const userRepo = require('../repositories/UserRepo')

function getAll(){
    return userRepo.getAll()
}

function create(userDTO){
    return userRepo.create(userDTO)
}

function getById(id){
    return userRepo.getById(id)
}

function getByEmail(email){
    return userRepo.getByEmail(email)
}

function getByUsername(username){
    return userRepo.getByUsername(username)
}

module.exports = {getAll,create,getById,getByEmail,getByUsername}