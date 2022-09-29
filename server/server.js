const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5964;

//      MIDDLEWARE
app.use(express.json());
app.use(cors());

//      GET REQUESTS
app.get("/", (req, res) => {
    res.send(`Connected to PORT: ${port}`);
});

//      POST REQUESTS




//    LISTENING
app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
});







