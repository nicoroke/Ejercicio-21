const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
  }
);

const User = require("./User");
const Comment = require("./Comment");
const Article = require("./Article");

User.initModel(sequelize);
Comment.initModel(sequelize);
Article.initModel(sequelize);

User.hasMany(Article);
Article.belongsTo(User);

Article.hasMany(Comment);
Comment.belongsTo(Article);

module.exports = {
  sequelize,
  Article,
  Comment,
  User,
};
