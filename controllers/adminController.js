const db = require("../db");

module.exports = {
  index: async (req, res) => {
    res.render("admin");
  },
};
