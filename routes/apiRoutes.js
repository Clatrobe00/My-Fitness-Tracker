const db = require("../models");

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        console.log('hello');
    });
}