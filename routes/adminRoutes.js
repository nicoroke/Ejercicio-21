const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
router.get("/articulo/nuevo", adminController.create);
router.post("/articulo", adminController.store);
router.get("/articulo/:id", adminController.show);
router.get("/articulo/:id/editar", adminController.edit);
router.patch("/articulo/:id", adminController.update);
router.delete("/articulo/:id", adminController.destroy);

module.exports = router;
