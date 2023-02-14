const { Article, User } = require("../models");

// Display a listing of the resource.
async function showAll(req, res) {
  const articles = await Article.findAll({ include: User });
  res.json(articles);
}

// Display the specified resource.
async function showOneById(req, res) {
  const article = await Article.findByPk(req.params.id, { include: User });
  res.json(article);
}

module.exports = {
  showAll,
  showOneById,
};
