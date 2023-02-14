const { Article, User } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

async function index(req, res) {
  const articles = await Article.findAll({
    include: User,
    /* limit: 4, */
    order: [["createdAt", "desc"]],
  });
  res.render("home", { articles, format, es });
}

// async function showContact(req, res) {
//   res.render("contact");
// }

// async function showAboutUs(req, res) {
//   res.render("aboutUs");
// }

module.exports = {
  index,
};
