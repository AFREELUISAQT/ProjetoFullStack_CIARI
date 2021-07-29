const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://ciaricluster:ciaricluster@cluster0.euxgq.mongodb.net/osmigrantes?retryWrites=true&w=majority";
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
