const mongoose = require("mongoose");
const abstractModel  = require("./AbstractModel");
const USERROLEENUM = require('../enums/UserRole')

const userSchema = new mongoose.Schema({
    ...abstractModel,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        maxLength: 11
    },
    address: {
        type: String,
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        enum: Object.values(USERROLEENUM).map(v => v),
        default: 'Customer'
    },
    name: {
        type: String,
        required: true,
    },
});

const user = mongoose.model("user", userSchema);

module.exports = user;