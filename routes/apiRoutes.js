var db = require("../models");

module.exports = function (app) {
  // auth test 
  app.get('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  });
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
