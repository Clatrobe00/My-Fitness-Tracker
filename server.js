// express server and mongoose

const express = require('express');
const mongoose = require('mongoose');
const logger = require("morgan");

//const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.static("public"));

// Parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const PORT = process.env.PORT || 3000;
//mongodb+srv://Clatrobe:L1feT1tan@clb-cluster.ahz85.mongodb.net/fitnessTrackerDB?retryWrites=true&w=majority
//"mongodb://localhost/fitnessTrackerDB"
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Clatrobe:L1feT1tan@clb-cluster.ahz85.mongodb.net/fitnessTrackerDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
