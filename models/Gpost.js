module.exports = function (sequelize, DataTypes) {
    var GryffPost = sequelize.define("GryffPost", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 2000]
            }
        },
        // rating: {
        //   type: DataTypes.INTEGER
        // }
    });

    GryffPost.associate = function (models) {

        GryffPost.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return GryffPost;

};