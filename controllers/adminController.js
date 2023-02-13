const { Article, User } = require("../models");
const { format } = require("date-fns");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({ include: User, limit: 100 });
  /* res.json(articles); */
  res.render("admin", { articles, format });
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
async function store(req, res) {
  console.log(req.body);
  if (req.body.title === "" || req.body.content === "") {
    res.redirect("/admin");
  } else {
    await Article.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.body.userId,
    }); // handle errors ?
    res.redirect("/admin");
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id, { include: User });
  res.render("article-edit", { article });
}

// Update the specified resource in storage.
async function update(req, res) {
  await Article.update(
    {
      title: req.body.title,
      content: req.body.content,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  ); // handle errors ?
  res.redirect("/admin");
}

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
