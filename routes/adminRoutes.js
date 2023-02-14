const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const articleController = require("../controllers/articleController");

router.get("/", adminController.index);
router.get("/articulo/nuevo", articleController.create);
router.post("/articulo", articleController.store);
router.get("/articulo/:id", articleController.show);
router.get("/articulo/:id/editar", articleController.edit);
router.patch("/articulo/:id", articleController.update);
router.delete("/articulo/:id", articleController.destroy);

module.exports = router;
