const pageRoutes = require("./pageRoutes");
const articleRoutes = require("./articleRoutes");
const apiRoutes = require("./apiRoutes");
const userRoutes = require("./userRoutes");

const adminRoutes = require("./adminRoutes");

module.exports = (app) => {
  app.use("/", pageRoutes);
  app.use("/articulos", articleRoutes);
  app.use("/api", apiRoutes);
  app.use("/usuarios", userRoutes);

  app.use("/admin", adminRoutes);
};
