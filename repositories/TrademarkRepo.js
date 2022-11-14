const trademark  = require("../models/TrademarkModel");

const create = ({name, img})=>{
   return trademark.create({name, img});
}

const getAll = () => {
    return trademark.find({active:true})
}

const getAllInActive = () => {
    return trademark.find({active:false})
}

const getByName = (trademarkName) => {
    return trademark.findOne({trademarkName})
}

const deleteOne = (id) => {
    return trademark.findOneAndUpdate({_id: id},{active:false})
}

const updateOne = (id, { name, img }) =>{
    return trademark.findOneAndUpdate({_id: id},{ name, img }, {new:true});
}

module.exports = {create , getAll, getByName, getAllInActive, deleteOne, updateOne}
