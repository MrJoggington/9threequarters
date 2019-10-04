module.exports = function (sequelize, DataTypes) {
    var RavenPost = sequelize.define("RavenPost", {
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

    RavenPost.associate = function (models) {

        RavenPost.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return RavenPost;

};