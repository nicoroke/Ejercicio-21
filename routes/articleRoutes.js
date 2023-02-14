const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const commentController = require("../controllers/commentController");

router.get("/", articleController.index);
router.get("/:id", articleController.show);
router.get("/:id/comentarios", commentController.show);
router.post("/:id/comentarios", commentController.create);

module.exports = router;
