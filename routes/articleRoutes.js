const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");

router.get("/", articleController.index);
router.get("/nuevo", articleController.create);
router.post("/", articleController.store);
router.get("/:id", articleController.show);
router.get("/:id/comentarios", commentController.show);
router.post("/:id/comentarios", commentController.create);
router.get("/:id/editar", articleController.edit);
router.patch("/:id", articleController.update);
router.delete("/:id", articleController.destroy);

module.exports = router;
