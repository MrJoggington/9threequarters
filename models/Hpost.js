module.exports = function (sequelize, DataTypes) {
    var HuffPost = sequelize.define("HuffPost", {
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

    HuffPost.associate = function (models) {

        HuffPost.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return HuffPost;

};