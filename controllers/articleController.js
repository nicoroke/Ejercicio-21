const { Article, User, Comment } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("article", { articles });
}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id, { include: User });
  res.render("article", { article, format, es });
}

// Show the form for creating a new resource
async function create(req, res) {
  // El user admin debería estar logueado
  // Por ahora los datos del admin son el id=1
  const user = await User.findByPk(1);
  res.render("article-create", { user });
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/uploads",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (files.image.size === 0) {
      console.log("borrar");
      fs.unlink(__dirname + "/../public/uploads/" + files.image.newFilename, (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (fields.title === "" || fields.content === "") {
      res.redirect("/admin"); // pendiente
    } else {
      let newArticleFields = {
        title: fields.title,
        content: fields.content,
        userId: fields.userId,
      };
      if (files.image.originalFilename !== "") {
        newArticleFields.image = "/uploads/" + files.image.newFilename;
      }
      await Article.create(newArticleFields); // handle errors ?
      res.redirect("/admin");
    }
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  const article = await Article.findByPk(req.params.id, { include: User });
  res.render("article-edit", { article });
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/uploads",
    keepExtensions: true,
  });
  form.parse(req, async (err, fields, files) => {
    if (files.image.size === 0) {
      console.log("borrar");
      fs.unlink(__dirname + "/../public/uploads/" + files.image.newFilename, (err) => {
        if (err) {
          throw err;
        }
      });
    }
    if (fields.title === "" || fields.content === "") {
      res.redirect("/admin"); // pendiente
    } else {
      let fieldsToUpdate = {
        title: fields.title,
        content: fields.content,
      };
      if (files.image.originalFilename !== "") {
        fieldsToUpdate.image = "/uploads/" + files.image.newFilename;
      }
      await Article.update(fieldsToUpdate, {
        where: {
          id: req.params.id,
        },
      }); // handle errors ?
      /* res.send(files); */
      res.redirect("/admin");
    }
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const count = await Article.destroy({ where: { id: req.params.id } });
    console.log(` [Database] Registro id=${req.params.id} eliminado de la table articles`);
    res.redirect("/admin?mensaje=");
  } catch (error) {
    res.redirect("/admin?error=");
  }
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
