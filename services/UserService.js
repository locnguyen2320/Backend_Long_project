const userRepo = require('../repositories/UserRepo')

function getAll(){
    return userRepo.getAll()
}

function create(userDTO, session){
    return userRepo.create(userDTO, session)
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

function deleteOne(id){
    return userRepo.deleteOne(id)
}

module.exports = {getAll,create,getById,getByEmail,getByUsername,deleteOne}