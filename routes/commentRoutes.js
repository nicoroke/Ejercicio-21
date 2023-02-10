const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/create", commentController.store);

router.get("/edit/:id", commentController.edit);

router.post("/delete/:id", commentController.delete);

module.exports = router;
