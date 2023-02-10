const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static initModel(sequelize) {
    Comment.init(
      {
        content: {
          type: DataTypes.TEXT,
        },
        /*         articleId: {
          type: DataTypes.INTEGER
        } */
      },
      {
        sequelize,
        modelName: "comment",
      },
    );
    return Comment;
  }
}

module.exports = Comment;
