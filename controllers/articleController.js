const db = require("../models");

module.exports = {
  index: async (req, res) => {
    const articles = await db.Article.findAll({
      include: db.User,
    });
    res.render("home", { articles }); // Hacer vista para mostrar todos* los artliculos
  },
  create: (req, res) => {
    res.send("Nuevo Artículo"); // Hacer vista para crear articulo
  },
  show: (req, res) => {
    res.send("Un artículo"); // Hacer vista para mostrar articulo
  },
  store: (req, res) => {
    res.send("Se guarda el artículo"); // Código para guardar artículo
  },
  edit: (req, res) => {
    res.send("Editar artículo"); // Código para guardar cambios en artículo
  },
  delete: (req, res) => {
    res.send("Se borra el artículo"); // Código para borrar artículo
  },
};
