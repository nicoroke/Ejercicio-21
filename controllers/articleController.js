const { Article, User, Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const articles = await Article.findAll({ include: User });
  /* res.json(articles); */
  res.render("article", { articles });
}

// Display the specified resource.
async function show(req, res) {
  const article = await Article.findByPk(req.params.id, { include: User });

  /* res.json(rows); */
  res.render("article", { article /* , count, rows */ });
}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  async function create(req, res) {
    const username = req.body.username;
    const content = req.body.content;
    const articleId = req.params;

    await Comment.create({
      content: `${content}`,
      username: `${username}`,
      articleId: `${articleId}`,
    });
    res.send("El post");
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
