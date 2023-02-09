const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Home");
});

router.get("/articles/:id", (req, res) => {});

router.get("/admin", (req, res) => {});

router.post("/articles/create", (req, res) => {});

router.post("/articles/edit/:id", (req, res) => {});

router.get("/articles/delete/:id", (req, res) => {});

router.post("/comments/create", (req, res) => {});

router.post("/comments/edit/:id", (req, res) => {});

router.get("/comments/delete/:id", (req, res) => {});

module.exports = router;
