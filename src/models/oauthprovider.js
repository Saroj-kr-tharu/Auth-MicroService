"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class oAuthProvider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // oAuthProvider.belongsTo(models.User, {
      //   foreignKey: "userId",
      //   as: "user",
      // });
    }
  }

  oAuthProvider.init(
    {
      // userId: {
      //   type: DataTypes.INTEGER,
      //   field: "user_id",
      //   references: {
      //     model: "users",
      //     key: "id",
      //   },
      // },
      providerUserId: {
        type: DataTypes.STRING(255),

        allowNull: false,
      },
      provider: {
        type: DataTypes.ENUM("google", "facebook", "linkedin", "github"),
        allowNull: false,
      },

      providerUserName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      providerPhoto: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "oAuthProvider",
    }
  );

  return oAuthProvider;
};
