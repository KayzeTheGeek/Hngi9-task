const ADDITION = "addition";
const SUBTRACTION = "subtraction";
const MULTIPLICATION = "multiplication";

const typeCheck = (req, res, next) => {
  const validKeys = ["operation_type", "x", "y"];
  const bodyKeys = Object.keys(req.body);
  console.log(req.body.operation_type);
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
    req.body.operation_type !== (ADDITION || SUBTRACTION || MULTIPLICATION)
  ) {
    console.log(
      "operation_type props must be any of this values (all in lower case):",
      ADDITION,
      SUBTRACTION,
      MULTIPLICATION
    );
    next("error");
  }
  next();
};

module.exports = {
  typeCheck,
};
