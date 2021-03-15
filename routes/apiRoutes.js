const db = require("../models/workout");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        res.send("Hello");
    });
}