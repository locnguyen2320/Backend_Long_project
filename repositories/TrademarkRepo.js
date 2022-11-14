const trademark  = require("../models/TrademarkModel");

const create = ({name, img})=>{
   return trademark.create({name, img});
}

const getAll = () => {
    return trademark.find({active:true})
}

// const getFalseActive = () => {
//     return trademark.find({active:false})
// }

const getByName = (trademarkName) => {
    return trademark.findOne({trademarkName})
}

const deleteOne = (id) => {
    return trademark.findOneAndUpdate({_id: id},{active:false})
}

const updateOne = (id, inputtrademark) =>{
    return trademark.findOneAndUpdate({_id: id},{...inputtrademark}, {new:true});
}

module.exports = {create , getAll, getByName, deleteOne, updateOne}
