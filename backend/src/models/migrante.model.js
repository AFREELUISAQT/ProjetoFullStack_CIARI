const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MigranteSchema = new Schema(
  {
    nomeMigrante: { type: String, required: true },
    sobrenomeMigrante: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    sexo: { type: String, required: true },
    emailMigrante: { type: String, required: true, unique: true, trim: true },
    telefone: { type: String, required: true },
    paisOrigem: { type: String, required: true },
    cep: { type: Number, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    uf: { type: String, required: true },
    nivelInstrucao: { type: String, required: true },
    trabalho: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Migrante", MigranteSchema);
