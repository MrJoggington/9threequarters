

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: { type: DataTypes.STRING, unique: true, allowNull: false, validate: { notEmpty: true } },
        password: {
            type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true }
        },
        House: { type: DataTypes.STRING, allowNull: true }
    },
        {
            dialect: 'mysql'
        });

    User.associate = function (models) {

        User.hasMany(models.Post, {
            onDelete: "cascade"
        })
    }

    return User
}