module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        house: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
<<<<<<< HEAD
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        dialect: 'mysql'
    });
=======
            type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true }
        },
        House: { type: DataTypes.STRING, allowNull: true }
    },
        {
            dialect: 'mysql'
        });
>>>>>>> 939e0cecbc6fb6c12697f12851d4953f7e241247

    User.associate = function (models) {

        User.hasMany(models.Post, {
            onDelete: "cascade"
        })
    }

    return User
}