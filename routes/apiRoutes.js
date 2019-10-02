var db = require("../models");
var passport = require("passport")
module.exports = function (app) {
  // auth sign up test
  app.post('/register', passport.authenticate('local-signup', {
      successRedirect: '/gryffindor',

      failureRedirect: '/home'
    }

  ));
  // auth test  
  app.post('/login',
    passport.authenticate('local-signin', {
      successRedirect: '/home',
      failureRedirect: '/hogwarts',
    })
  );
  // Get all posts
  app.get("/api/platform", function (req, res) {
    Post.findAll({}).then(function (results) {
      res.json(results)
    });
  });

  // Create a new post
  app.post("/api/platform", function (req, res) {
    console.log("Thread Data:");
    console.log(req.body);
    Post.create({
      title: req.body.title,
      body: req.body.body
    }).then(function (results) {
      res.end();
    });
  });

  // Delete an post by id
  app.delete("/api/platform/:id", function (req, res) {
    Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  //Update a post
  app.put("/api/platform", function (req, res) {
    Post.update({
        title: req.body.title,
        body: req.body.body
      }, {
        where: {
          id: req.body.id
        }
      }).then(function (results) {
        res.json(results);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};