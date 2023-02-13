const { Article, User } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({
    include: User,
    limit: 10,
    order: [["createdAt", "DESC"]],
  });
  /* res.json(articles); */
  res.render("admin", { articles, format, es });
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
function store(req, res) {
  if (req.body.title === "" || req.body.content === "") {
    res.redirect("/admin"); // pendiente
  } else {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/uploads",
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      await Article.create({
        title: fields.title,
        content: fields.content,
        image: "/uploads/" + files.image.newFilename,
        userId: fields.userId,
      }); // handle errors ?
      res.redirect("/admin");
    });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id, { include: User });
  res.render("article-edit", { article });
}

// Update the specified resource in storage.
async function update(req, res) {
  if (req.body.title === "" || req.body.content === "") {
    res.redirect("/admin"); // pendiente
  } else {
    const form = formidable({
      multiples: true,
      uploadDir: __dirname + "/../public/uploads",
      keepExtensions: true,
      allowEmptyFiles: false,
    });
    form.parse(req, async (err, fields, files) => {
      let fieldsToUpdate = {
        title: fields.title,
        content: fields.content,
      };
      if (files.image !== undefined) {
        fieldsToUpdate.image = "/uploads/" + files.image.newFilename;
      }
      await Article.update(fieldsToUpdate, {
        where: {
          id: req.params.id,
        },
      }); // handle errors ?
      res.redirect("/admin");
    });
  }
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
