const express = require("express");

const router = express.Router();

const ADDITION = "addition";
const SUBTRACTION = "subtraction";
const MULTIPLICATION = "multiplication";

router.get("/", (req, res) => {
  res.json({
    slackUsername: "Kayzethegeek",
    backend: true,
    age: 25,
    bio: "I am a backend developer with experience in NODE and Mongodb. I have worked on a variety of projects, from small websites to large e-commerce platforms. I am a quick learner and have a keen eye for detail. I am also an excellent problem solver, and have a passion for developing clean and efficient code.",
  });
});

let typeCheck = (req, res, next) => {
  const validKeys = ["operation_body", "x", "y"];
  const bodyKeys = Object.keys(req.body);
  console.log(req.body.operation_body);
  if (
    !validKeys.every((value) => bodyKeys.some((bvalue) => bvalue === value))
  ) {
    console.log("the following keys must exist:", validKeys.toString());
    next("error");
  } else if (isNaN(req.body.x)) {
    console.log("x props must be a number");
    next("error");
  } else if (isNaN(req.body.y)) {
    console.log("y props must be a number");
    next("error");
  } else if (
    req.body.operation_body !==
    ("addition" || "subtraction" || "multiplication")
  ) {
    console.log(
      "operation_body props must be any of this values (all in lower case):",
      "addition",
      "subtraction",
      "multiplication"
    );
    next("error");
  }
  next();
};

router.post("/", typeCheck, (req, res) => {
  let result;
  if (req.body.operation_body === "addition") {
    result = req.body.x + req.body.y;
  } else if (req.body.operation_body === "subtraction") {
    result = req.body.x - req.body.y;
  } else {
    result = req.body.x * req.body.y;
  }
  
  res.json({
    slackUsername: "Kayzethegeek",
    operation_type: req.body.operation_body,
    result,
  });
});

module.exports = router;
