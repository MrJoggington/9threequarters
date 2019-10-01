<<<<<<< HEAD
var bCrypt = require('bcrypt');

module.exports = function (passport, user) {
    var User = user

    var LocalStrategy = require('passport-local').Strategy;


    passport.use('local-signup', new LocalStrategy(

        {

            usernameField: 'username',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },



        function (req, username, password, done) {

            var generateHash = function (password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };



            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {

                if (user) {

                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else {

                    var userPassword = generateHash(req.body.password);



                    User.create({
                        username: req.body.username,
                        password: userPassword
                    }).then(function (newUser) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            return done(null, newUser);

                        }

                    });

                }

            });

        }

    ));


    passport.use('local-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email

            // usernameField: 'username',

            // passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, username, password, done) {

            var User = user;

            var isValidPassword = function (userpass, password) {

                return bCrypt.compareSync(password, userpass);

            }

            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {

                if (!user) {

                    return done(null, false, {
                        message: 'Email does not exist'
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));
}
=======
var passport = require('passport')
var LocalStrategy = require('passport-local')
var db = require('../models')

// serialize sessions
passport.serializeUser(function (user, done) {
    done(null, user);

})

//deserialize sessions
passport.deserializeUser(function (user, done) {
    db.User.find({
        where: {
            id: user.id
        }
    }).success(function (user) {
        done(null, user);
    }).error(function (err) {
        done(err, null)
    });
});

// for authentication
passport.use(new LocalStrategy(
    function (username, password, done) {
        db.User.find({
            where: {
                username: username
            }
        }).success(function (user) {
            passwd = user ? user.password : ''
            isMatch = db.User.validPassword(password, passwd, done, user)
        })
    }
))
>>>>>>> 847f09295141bd696ad58b9b09598899453e5b17
