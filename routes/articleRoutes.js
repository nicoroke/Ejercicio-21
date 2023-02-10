const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/", articleController.index);

router.get("/nuevo", articleController.create);

router.get("/:id", articleController.show);

router.post("/create", articleController.store);

router.get("/edit/:id", articleController.edit);

router.post("/delete/:id", articleController.delete);

module.exports = router;
