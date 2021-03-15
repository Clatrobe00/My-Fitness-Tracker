const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ["resistance", "cardio"],
    },
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: [50, "Exercise name must be shorter than fifty characters."],
    },
    weight: {
        type: Number,
        required: true,
        min: [1, "weight must be 1 or greater."],
    },
    sets: {
        type: Number,
        required: true,
        min: [1, "You must have at least one set."],
    },
    reps: {
        type: Number,
        required: true,
        min: [1, "You must have at least one rep."],
    },
    duration: {
        type: Number,
        max: 60,
    },
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;