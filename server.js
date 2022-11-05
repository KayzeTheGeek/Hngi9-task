const express = require("express");
const sendName = require("./home.route");

const app = express();

app.use("/", sendName);

app.listen(5000, () => console.log("this server is up"));
