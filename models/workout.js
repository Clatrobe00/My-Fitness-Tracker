const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } }
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [{
        type: {
            type: String,
            required: true,
            enum: ["resistance", "cardio"],
            },
        name: {
            type: String,
            required: true,
            maxLength: [50, "Exercise name must be shorter than fifty characters."],
            minLength: [2, "Name must be at least 2 characters."],
        },
        weight: {
            type: Number,
            required: false,
            min: [1, "weight must be 1 or greater."],
        },
        sets: {
            type: Number,
            required: false,
            min: [1, "You must have at least one set."],
        },
        reps: {
            type: Number,
            required: false,
            min: [1, "You must have at least one rep."],
        },
        duration: {
            type: Number,
            max: 60,
            required: true,
        },
        distance: {
            type: Number,
            max: 10000,
            required: false,
        },
    }],
}, opts);

workoutSchema.virtual('totalDuration')
    .get(function () {
        let totalDuration = 0
        this.exercises.forEach(function (ex) {
            totalDuration += ex.duration;
        })
        return totalDuration;
        //.reduce((function (acc, cur) {
            // console.log('duration is', cur);
            // return acc + cur.duration
     });
        //)
    //})

const Workout = mongoose.model("Workout", workoutSchema);



module.exports = Workout;