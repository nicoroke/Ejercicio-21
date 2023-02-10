const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const userController = require("../controllers/articleController");
// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", articleController.index);

router.get("/", userController.index);
module.exports = router;
