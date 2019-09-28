var path = require("path");

module.exports = function (app) {
  // Load Home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"))
  })

  //Load Hogwarts page with all houses on it
  app.get("/hogwarts", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/hogwarts.html"))
  })

  //Load Gryffindor house page
  app.get("/gryffindor", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/gryffindor.html"))
  })

  //Load Hufflepuff house page
  app.get("/hufflepuff", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/hufflepuff.html"))
  })

  //Load Ravenclaw house page
  app.get("/ravenclaw", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/ravenclaw.html"))
  })

  //Load Slytherin house page
  app.get("/slytherin", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/slytherin.html"))
  })
}