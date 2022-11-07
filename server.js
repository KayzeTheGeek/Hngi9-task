const express = require("express");
const sendName = require("./routes/home");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", sendName);

app.listen(5000, () => console.log("this server is up"));
