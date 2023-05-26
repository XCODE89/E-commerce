const express = require("express");
const routes = require("./routes/indexRouter")

const app = express()

app.use(express.json());

app.use("/", routes)


module.exports = app