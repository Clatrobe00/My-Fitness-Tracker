// express server and mongoose

const express = require('express');
const mongoose = require('mongoose');

const app = express();

//const routes;

app.use(express.static("public"));

// Parsing

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
