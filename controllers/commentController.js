const db = require("../models");

module.exports = {
  index: async (req, res) => {
    const articles = await db.Article.findAll({
      include: db.User,
    });
    res.render("admin", { articles });
  },
  store: (req, res) => {
    res.send("Se guarda el comentario"); // Código para guardar comentario
  },
  edit: (req, res) => {
    res.send("Editar comentario"); // Código para guardar cambios en comentario
  },
  delete: (req, res) => {
    res.send("Se borra el comentario"); // Código para borrar comentario
  },
};
