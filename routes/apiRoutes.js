const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", async (req, res) => {
        const exercises = await db.Workout.find({});
        res.json(exercises);
    });

    app.put("/api/workouts/:id", async (req, res) => {
        const result = await db.Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body }})
        res.json(result);
    });

    app.post("/api/workouts", async (req, res) => {
        const w = await db.Workout.create({...req.body});
        res.json(w);
    });

    app.get("/api/workouts/range", async (req, res) => {
        let stats = await db.Workout.find({});
        console.log(stats);
        res.json(stats);
        console.log('range accessed');
    })
}