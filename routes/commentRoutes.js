const express = require("express");
const router = express.Router();

// Rutas relacionadas a los comentarios:
// ...
router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
