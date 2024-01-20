const { DataTypes, INTEGER } = require("sequelize");
const sequelize = require("./index");

const Admin = sequelize.define(
    "Admin",
    {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    features: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    experience: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }
    );


const User = sequelize.define(
    "User",
    {
    name: {
      type: DataTypes.DATE,
      allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      }
  },
  );

  const Record = sequelize.define(
    "Record",
    {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "Без названия"
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    creation_date: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  module.exports = {
    Admin,
    User,
    Record,
  };