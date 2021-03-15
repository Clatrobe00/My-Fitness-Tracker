const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    type: {
        type: String,
        enum: ["cardio", "resistance"],
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: [50, "Exercise name must be shorter than fifty characters."],
    },
    duration: {
        type: Number,
        max: 360,
    },
    distance: {
        type: Number,
        max: 100000,
    },
})

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;