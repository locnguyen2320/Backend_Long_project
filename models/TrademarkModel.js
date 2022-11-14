const mongoose = require("mongoose");
const abstractModel  = require("./AbstractModel");

const trademarkSchema = new mongoose.Schema({
    ...abstractModel,
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
});

const trademark = mongoose.model("trademark", trademarkSchema);

module.exports = trademark;
