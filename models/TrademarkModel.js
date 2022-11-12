const mongoose = require("mongoose");
const abstractModel  = require("./AbstractModel");

const categorySchema = new mongoose.Schema({
    ...abstractModel,
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
});

categorySchema.plugin(mongoosePaginate)
const category = mongoose.model("category", categorySchema);

module.exports = category;