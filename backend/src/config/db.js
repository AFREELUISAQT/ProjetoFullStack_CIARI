const mongoose = require("mongoose");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const password = process.env.DB_PASSWORD;

const mongoUrl = `mongodb+srv://ciaricluster:${password}@cluster0.euxgq.mongodb.net/osmigrantes?retryWrites=true&w=majority`;
mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (error) {
    if (error) {
      console.log("Erro de Conectividade com MongoDB!");
    } else {
      console.log("Conectividade Exitosa com MongoDB!");
    }
  }
);
module.exports = mongoUrl;
