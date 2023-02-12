const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/articulos/", apiController.showAll);
router.get("/articulos/:id", apiController.showOneById);

module.exports = router;
