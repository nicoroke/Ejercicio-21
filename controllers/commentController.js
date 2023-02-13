const { Article, User, Comment } = require("../models");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {
  const { count, rows } = await Comment.findAndCountAll({
    where: {
      articleId: `${req.params.id}`,
    },
  });
  res.json({ count, rows });
}

// Show the form for creating a new resource
async function create(req, res) {
  const username = req.body.username;
  const content = req.body.content;
  const articleId = req.params.id;

  await Comment.create({
    content: `${content}`,
    username: `${username}`,
    articleId: `${articleId}`,
  });
  res.redirect(`/articulos/${articleId}`);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

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
