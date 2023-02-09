const router = require("express").Router();
const adminController = require("./controllers/adminController");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/articles/:id", (req, res) => {});

router.get("/admin", adminController.index);

router.post("/articles/create", (req, res) => {});

router.post("/articles/edit/:id", (req, res) => {});

router.get("/articles/delete/:id", (req, res) => {});

router.post("/comments/create", (req, res) => {});

router.post("/comments/edit/:id", (req, res) => {});

router.post("/comments/delete/:id", (req, res) => {});

module.exports = router;
