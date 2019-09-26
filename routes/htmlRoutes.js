var path = require('path')

module.exports = function (app) {
  // Load home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/Home.html"))
  })

  // Load hogwarts page with all houses on it
  app.get("/hogwarts", function (req, res) {
    res.sendFile(path.join(__dirname, "public/hogwarts.html"))
  })

  // Load gryffindor house page
  app.get("/gryffindor", function (req, res) {
    res.sendFile(path.join(__dirname, "public/gryffindor.html"))
  })

  // Load hufflepuff house page
  app.get("/hufflepuff", function (req, res) {
    res.sendFile(path.join(__dirname, "public/hufflepuff.html"))
  })

  // Load ravenclaw house page
  app.get("/ravenclaw", function (req, res) {
    res.sendFile(path.join(__dirname, "public/ravenclaw.html"))
  })

  // Load slytherin house page
  app.get("/slytherin", function (req, res) {
    res.sendFile(path.join(__dirname, "public/slytherin.html"))
  })

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};