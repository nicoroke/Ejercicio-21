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

// async function destroy(req, res) {
//   const count = await Article.destroy({ where: { id: req.params.id } });
//   console.log(` [Database] Registro id=${req.params.id} eliminado de la table articles`);
//   if (count > 0) {
//     res.send("ok");
//   } else {
//     res.send("error");
//   }
// }

module.exports = {
  showAll,
  showOneById,
};
