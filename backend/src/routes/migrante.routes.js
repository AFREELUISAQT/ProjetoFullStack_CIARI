const express = require("express");
const router = express.Router();

const app = express();

const Migrante = require("../controllers/migrante.controllers");

router.post("/migrante/novo", Migrante.create);
router.get("/migrantes", Migrante.searchAll);
router.get("/migrante/:id", Migrante.searchId);
router.get("/migrante/trabalho/:trabalho", Migrante.searchTrabalho);
router.put("/migrante/:id", Migrante.update);
router.delete("/migrante/:id", Migrante.delete);

module.exports = router;
