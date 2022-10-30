const http = require("http");

const app = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      slackUsername: "Kayzethegeek",
      backend: true,
      age: 25,
      bio: "I am a backend developer with experience in NODE and Mongodb. I have worked on a variety of projects, from small websites to large e-commerce platforms. I am a quick learner and have a keen eye for detail. I am also an excellent problem solver, and have a passion for developing clean and efficient code.",
    })
  );
});
app.listen(5000);
