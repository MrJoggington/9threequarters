var passport = require("passport")
var db = require("../models")
module.exports = function (app) {
  app.get('/profile', isLoggedIn),
    function (req, res) {
      res.redirect("/profile")
    }
  // logout button
  app.get('/logout', function (req, res) {
    req.session = null
    console.log(req.session)
    res.redirect('/')
  })
  // auth sign up test
  app.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/hogwarts',

    failureRedirect: '/'
  }


  ));
  // auth test
  app.post('/login',
    passport.authenticate('local-signin', {
      successRedirect: '/hogwarts',
      failureRedirect: '/',
    })
  );
  // Get all posts
  app.get("/api/platform", function (req, res) {
    db.Post.findAll({}).then(function (results) {
      res.json(results)
    });
  });

  // Create a new post
  app.post("/api/platform", function (req, res) {
    console.log("Thread Data:");
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body
    }).then(function (results) {
      res.end();
    });
  });

  // Delete an post by id
  app.delete("/api/platform/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  //Update a post
  app.put("/api/platform", function (req, res) {
    db.Post.update({
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
  // checks to see if ya logged in
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect("/signin")
    }
  }
};
