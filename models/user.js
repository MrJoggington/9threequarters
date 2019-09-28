var bcrypt = require("bcrypt")

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: { type: DataTypes.STRING, unique: true, allowNull: false, validate: { notEmpty: true } },
        password: {
            type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true }
        }
    },
        {
            classMethods: {
                validPassword: function (password, passwd, done, user) {
                    bcrypt.compare(password, passwd, function (err, isMatch) {
                        if (err) console.log(err)
                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false)
                        }
                    })
                }
            }
        },
        {
            dialect: 'mysql'
        });
    User.beforeCreate((user, fn) => {
        var salt = bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            return salt
        });
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            return fn(null, user)
        });
    })
    return User
}