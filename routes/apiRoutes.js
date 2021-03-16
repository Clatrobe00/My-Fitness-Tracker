const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", async (req, res) => {
        const exercises = await db.Workout.find({});
        res.json(exercises);
    });

    app.put("/api/workouts/:id", async (req, res) => {
        console.log("update query body is", req.body);
        const result = await db.Workout.updateOne({ id: req.params.id }, {$push: {exercises: [req.body]}})
        console.log(result);
        res.json(result);
    });

    app.post("/api/workouts", async (req, res) => {
        console.log("post query body is", req.body);
        const w = await db.Workout.create({...req.body});
        console.log(w)
        res.json(w);
    });

    app.get("/api/workouts/range", async (req, res) => {
        let stats = await db.Workout.find({});
        res.json(stats);
        console.log('range accessed');
    })
}