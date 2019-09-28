var Post = require("../models");

module.exports = function (app) {
  // auth sign up test
  app.post('/register', function (req, res) {
    Post.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function (results) {
      console.log(results)
      res.redirect('/home')
    })
  })
  // auth test  
  app.get('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/home'); }
      req.logIn(user, function (err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  });
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
    Post.destroy({ where: { id: req.params.id } }).then(function (results) {
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
