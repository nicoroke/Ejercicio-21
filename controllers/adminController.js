const db = require("../db");

module.exports = {
  index: async (req, res) => {
    const articles = await db.Article.findAll();
    res.render("admin", { articles });
  },
};
