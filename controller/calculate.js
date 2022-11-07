const calculate = (req, res) => {
  let result;
  if (req.body.operation_type === "addition") {
    result = req.body.x + req.body.y;
  } else if (req.body.operation_type === "subtraction") {
    result = req.body.x - req.body.y;
  } else {
    result = req.body.x * req.body.y;
  }

  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    slackUsername: "Kayzethegeek",
    operation_type: req.body.operation_type,
    result,
  });
};

const getName = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    slackUsername: "Kayzethegeek",
    backend: true,
    age: 25,
    bio: "I am a backend developer with experience in NODE and Mongodb. I have worked on a variety of projects, from small websites to large e-commerce platforms. I am a quick learner and have a keen eye for detail. I am also an excellent problem solver, and have a passion for developing clean and efficient code.",
  });
};

module.exports = {
  calculate,
  getName,
};
