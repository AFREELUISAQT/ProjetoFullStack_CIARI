const express = require("express");
const cors = require("cors");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const app = express();
require("./backend/src/config/db");

// ---Declarando a porta do servidor---
const port = process.env.PORT || 8080;

// ---Configurando os middelewares---
app.use(express.json());
app.use(cors());

// ---Configurando as rotas---
app.use(require("./backend/src/routes/migrante.routes"));

app.listen(port, function () {
  console.log(`Iniciando a Conectividade na Porta ${port}`);
});
