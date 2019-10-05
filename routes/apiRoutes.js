var passport = require("passport")
var db = require("../models")


module.exports = function (app) {
  app.get('/api/hogwarts', function (req, res) {
    db.User.findAll({
      where: {
        id: req.session.passport.user
      }
    }).then(function (results) {
      console.log(results[0].dataValues)
      res.json(results[0].dataValues.username)
    })
  })
  app.get('/profile', isLoggedIn),
    function (req, res) {
      res.json(results)
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
  // // Get all posts
  // app.get("/api/platform", function (req, res) {

  //   db.Post.findAll({ include: [{ model: db.User }] }).then(function (results) {
  //     res.json(results)
  //   });

  // });

  // // Create a new post
  // app.post("/api/platform", function (req, res) {
  //   console.log("Thread Data:");
  //   console.log(req.body);
  //   console.log(req.session.passport.user)
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     UserId: req.session.passport.user
  //   }).then(function (results) {
  //     res.end();
  //   });
  // });

  // Gryff get
  app.get("/api/gryffindor", function (req, res) {

    db.GryffPost.findAll({
      include: [{
        model: db.User
      }]
    }).then(function (results) {
      res.json(results)
    });
  });


  // Gryff Create
  app.post("/api/gryffindor", function (req, response) {
    console.log("Thread Data:");
    console.log(req.body);
    console.log(req.session.passport)
    db.User.findAll({
        where: {
          id: req.session.passport.user
        }
      })
      .then(function (res, post) {
        if (res[0].dataValues.House === "Gryffindor") {
          db.GryffPost.create({
            title: req.body.title,
            body: req.body.body,
            UserId: req.session.passport.user
          }).then(function (results) {
            response.json(results)
          })
        } else {
          console.log("You are not a member of that house")
        }


      })
  });

  // Huff get
  app.get("/api/hufflepuff", function (req, res) {

    db.HuffPost.findAll({
      include: [{
        model: db.User
      }]
    }).then(function (results) {
      res.json(results)
    });

  });

  // Huff Create
  app.post("/api/hufflepuff", function (req, response) {
    console.log("Thread Data:");
    console.log(req.body);
    console.log(req.session.passport)
    db.User.findAll({
        where: {
          id: req.session.passport.user
        }
      })
      .then(function (res, post) {
        if (res[0].dataValues.House === "Hufflepuff") {
          db.HuffPost.create({
            title: req.body.title,
            body: req.body.body,
            UserId: req.session.passport.user
          }).then(function (results) {
            response.json(results)
          })
        } else {
          console.log("You are not a member of that house")
        }


      })
  });
  // Ravenclaw get
  app.get("/api/ravenclaw", function (req, res) {

    db.RavenPost.findAll({
      include: [db.User]
    }).then(function (results) {
      res.json(results)
    });

  });

  // Ravenclaw Create
  app.post("/api/ravenclaw", function (req, response) {
    console.log("Thread Data:");
    console.log(req.body);
    console.log(req.session.passport)
    db.User.findAll({
        where: {
          id: req.session.passport.user
        }
      })
      .then(function (res, post) {
        if (res[0].dataValues.House === "Ravenclaw") {
          db.RavenPost.create({
            title: req.body.title,
            body: req.body.body,
            UserId: req.session.passport.user
          }).then(function (results) {
            response.json(results)
          })
        } else {
          console.log("You are not a member of that house")
        }


      })
  });
  // Slytherin get
  app.get("/api/slytherin", function (req, res) {

    db.SlyPost.findAll({
      include: [{
        model: db.User
      }]
    }).then(function (results) {
      res.json(results)
    });

  });

  // Slytherin Create
  app.post("/api/slytherin", function (req, response) {
    console.log("Thread Data:");
    console.log(req.body);
    console.log(req.session.passport)
    db.User.findAll({
        where: {
          id: req.session.passport.user
        }
      })
      .then(function (res, post) {
        if (res[0].dataValues.House === "Slytherin") {
          db.SlyPost.create({
            title: req.body.title,
            body: req.body.body,
            UserId: req.session.passport.user
          }).then(function (results) {
            response.json(results)
          })
        } else {
          console.log("You are not a member of that house")
        }


      })
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