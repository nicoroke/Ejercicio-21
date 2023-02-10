const db = require("../models");

module.exports = {
  index: async (req, res) => {
    const articles = await db.Article.findAll({
      include: db.User,
    });
    console.log(articles);
    res.render("admin", { articles });
  },
};
