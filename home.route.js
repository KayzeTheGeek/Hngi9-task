const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    slackUsername: "Kayzethegeek",
    backend: true,
    age: 25,
    bio: "I am a backend developer with experience in NODE and Mongodb. I have worked on a variety of projects, from small websites to large e-commerce platforms. I am a quick learner and have a keen eye for detail. I am also an excellent problem solver, and have a passion for developing clean and efficient code.",
  });
});

module.exports = router;
