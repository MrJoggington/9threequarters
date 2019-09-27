var path = require("path");

module.exports = function (app) {
  // Load Home page
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  })

  //Load Hogwarts page with all houses on it
  app.get("/hogwarts", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/hogwarts.html"))
  })

  //Load Gryffindor house page
  app.get("/gryffindor", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/gryffindor.html"))
  })

  //Load Hufflepuff house page
  app.get("/hufflepuff", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/hufflepuff.html"))
  })

  //Load Ravenclaw house page
  app.get("/ravenclaw", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/ravenclaw.html"))
  })

  //Load Slytherin house page
  app.get("/slytherin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/slytherin.html"))
  })
}