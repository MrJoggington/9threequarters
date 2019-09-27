var db = require("../models");

module.exports = function (app) {
  // Get all posts
  app.get("/api/platform", function (req, res) {
    db.Platform.findAll({}).then(function (dbPlatform) {
      res.json(dbPlatform);
    });
  });

  // Create a new post
  app.post("/api/platform", function (req, res) {
    db.Platform.create({
      title: req.body.title,
      body: req.body.body
    }).then(function (dbPlatform) {
      res.json(dbPlatform);
    });
  });

  // Delete an post by id
  app.delete("/api/platform/:id", function (req, res) {
    db.Platform.destroy({ where: { id: req.params.id } }).then(function (dbPlatform) {
      res.json(dbPlatform);
    });
  });

  //Update a post
  app.put("/api/platform", function (req, res) {
    db.Platform.update({
      title: req.body.title,
      body: req.body.body
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbPlatform) {
      res.json(dbPlatform);
    })
      .catch(function (err) {
        res.json(err);
      });
  });
};
