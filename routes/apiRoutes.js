const db = require("../models/workout");

module.exports = (app) => {
    app.get("/api/workouts", async (req, res) => {
        const exercises = await db.find({});
        res.json(exercises);
    });

    app.put("/api/workouts/:id", async (req, res) => {
        const result = await db.updateOne({ id: req.params.id }, {$push: {exercises: [req.body]}})
        console.log(result);
        res.json(result);
    });

    app.post("/api/workouts", async (req, res) => {
        const w = await db.create({...req.body});
        console.log(w)
        res.json(w);
    })
}