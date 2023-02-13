const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/articulos/", apiController.showAll);
router.get("/articulos/:id", apiController.showOneById);
// router.post("/articulo", apiController.store);
// router.patch("/articulo/:id", apiController.update);
// router.delete("/articulo/:id", apiController.destroy);

module.exports = router;
