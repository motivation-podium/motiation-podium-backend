const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Mobile: {
        type: String,
    },
})

mongoose.model("USER", userSchema) 