const { Article, User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({ include: User, limit: 10 });
  /* res.json(articles); */
  res.render("admin", { articles });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {
  // El user admin debería estar logueado
  // Por ahora los datos del admin son el id=1
  const user = await User.findByPk(1);
  res.render("article-create", { user });
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id, { include: User });
  res.render("article-edit", { article });
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const count = await Article.destroy({ where: { id: req.params.id } });
  console.log(` [Database] Registro id=${req.params.id} eliminado de la table articles`);
  res.redirect("/admin");
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
