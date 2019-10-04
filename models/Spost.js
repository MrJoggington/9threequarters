module.exports = function (sequelize, DataTypes) {
    var SlyPost = sequelize.define("SlyPost", {
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

    SlyPost.associate = function (models) {

        SlyPost.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return SlyPost;

};