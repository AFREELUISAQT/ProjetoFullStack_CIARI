const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MigranteSchema = new Schema(
  {
    nomeMigrante: { type: String, required: true },
    sobrenomeMigrante: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    sexo: { type: String },
    emailMigrante: { type: String, required: true, unique: true, trim: true },
    telefone: { type: String, required: true },
    paisOrigem: { type: String, required: true },
    cep: { type: String },
    logradouro: { type: String },
    bairro: { type: String },
    localidade: { type: String },
    uf: { type: String },
    nivelInstrucao: { type: String },
    trabalho: { type: String },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Migrante", MigranteSchema);
