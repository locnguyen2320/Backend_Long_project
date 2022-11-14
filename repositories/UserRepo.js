const user  = require("../models/UserModel");

const create = ({username, password, name, phone, email, address, birthday, role})=>{
   return user.create({username, password, name, phone, email, address, birthday, role});
}

const getAll = () => {
    return user.find({active:true})
}

const getAllInActive = () => {
    return user.find({active:false})
}

const getByEmail = (email) => {
    return user.findOne({email})
}

const getByUsername = (username) => {
    return user.findOne({username})
}

const deleteOne = (id) => {
    return user.findOneAndUpdate({_id: id},{active:false})
}

const updateOne = (id, {name, phone, email, address, birthday}) =>{
    return user.findOneAndUpdate({_id: id},{name, phone, email, address, birthday}, {new:true});
}

module.exports = {create , getAll, getByEmail, getAllInActive, getByUsername, deleteOne, updateOne}
