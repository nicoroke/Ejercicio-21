require("dotenv").config();

const express = require("express");
const methodOverride = require("method-override");

const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");

const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

routes(app);

dbInitialSetup(); // Crea tablas e inserta datos de prueba.
const db = require("./models");
/* (async () => {
  await db.sequelize.sync({ alter: true });
  console.log("[Database] ¡La estructura de tablas fue actualizada!");
})(); */

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});
