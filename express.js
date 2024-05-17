// Importar los módulos
const express = require("express");

const app = express();

// Configurar el puerto
const port = 4000;

const jsonAlumnos = require('./data/customers.json');

app.get("/", (req, res) => {
  //   res.send("<h1>Home</h1>");
  res.sendFile("./static/index.html", { root: __dirname });
});

app.get("/alumnos", (req, res) => {
//   res.send("<h1>Alumnos</h1>");
  // res.send("<h1>Alumnos</h1>");
  res.json(jsonAlumnos);
});

app.use(express.static("static"));

app.use((req, res) => {
//   res.status(404).send("<h1>404 Not Found</h1>");
  res.status(404).sendFile("./static/404.html", { root: __dirname });

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
