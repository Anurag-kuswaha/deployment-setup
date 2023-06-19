/**
 * @name: app.js 
 */

var express = require("express");
var cors = require("cors");

require("dotenv").config();
const routes = require("./startup/router");

var app = express();

app.use(cors());
app.use(express.json());



app.use(routes);

app.use((err, req, res, next) => {
  res.status(500).send();
  next(err);
});

module.exports = app;
