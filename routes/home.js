const express = require("express");
const { calculate, getName } = require("../controller/calculate");
const { typeCheck } = require("../middlewares/checkValid");

const router = express.Router();

router.get("/", getName);

router.post("/", typeCheck, calculate);

module.exports = router;
