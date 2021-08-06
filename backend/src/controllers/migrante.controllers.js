const Migrante = require("../models/migrante.model");
const guiaValidators = require("../validators/guiaValidators");
const mailer = require("../config/mailer");

module.exports = {
  async create(req, res) {
    const {
      nomeMigrante,
      sobrenomeMigrante,
      dataNascimento,
      sexo,
      emailMigrante,
      telefone,
      paisOrigem,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
      nivelInstrucao,
      trabalho,
    } = req.body;

    let validation = new guiaValidators();
    validation.hasMinLen(
      req.body.nomeMigrante,
      2,
      "Nome precisa ter no mínimo 2 caracteres!"
    );
    validation.hasMaxLen(
      req.body.nomeMigrante,
      40,
      "Nome precisa ter no máximo 40 caracteres!"
    );
    validation.hasMinLen(
      req.body.sobrenomeMigrante,
      2,
      "Sobrenome precisa ter no mínimo 2 caracteres!"
    );
    validation.hasMaxLen(
      req.body.sobrenomeMigrante,
      40,
      "Sobrenome precisa ter no máximo 40 caracteres!"
    );
    validation.isRequired(req.body.emailMigrante, "O Email é obrigatorio!");
    validation.isEmail(req.body.emailMigrante, "O Email precisa ser válido!");
    validation.hasMinLen(
      req.body.telefone,
      8,
      "Telefone precisa ter no mínimo 8 dígitos!"
    );
    validation.hasMinLen(
      req.body.paisOrigem,
      2,
      "País de Origem precisa ter no mínimo 2 dígitos!"
    );
    validation.hasMaxLen(
      req.body.paisOrigem,
      40,
      "País de Origem precisa ter no máximo 40 caracteres!"
    );
    validation.hasMinLen(
      req.body.cep,
      8,
      "Cep precisa ter no mínimo 8 dígitos!"
    );

    if (!validation.isValid()) {
      res.status(400).send(validation.errors()).end();
      return;
    }
    try {
      let data = {};
      let migrante = await Migrante.findOne({ emailMigrante });
      if (!migrante) {
        data = {
          nomeMigrante,
          sobrenomeMigrante,
          dataNascimento,
          sexo,
          emailMigrante,
          telefone,
          paisOrigem,
          cep,
          logradouro,
          bairro,
          localidade,
          uf,
          nivelInstrucao,
          trabalho,
        };
        migrante = await Migrante.create(data);

        return (
          res.status(201).json({
            message: "Usuario Cadastrado Com Sucesso!",
            status: 201,
            statusText: "Created",
            message: "Dados Cadastrados com Sucesso!",
            data: migrante,
          }),
          mailer.sendMail(migrante),
          console.log("Dados Cadastrados com Sucesso!")
        );
      } else {
        res.status(400).send({
          status: 400,
          statusText: "Bad Request",
          message: "Esse email está cadastrado. Verifique os Dados!",
        }),
          console.log("Esse email está cadastrado. Verifique os Dados!");
        return;
      }
    } catch (error) {
      res.status(400).send({
        status: 400,
        statusText: "Bad Request",
        message: "Falha no cadastro. Verifique os Dados!",
      }),
        console.log("Falha no cadastro. Verifique os Dados!");
    }
  },

  async searchAll(req, res) {
    try {
      const migrante = await Migrante.find();
      return (
        res.status(201).json({
          status: 200,
          statusText: "OK",
          message: "Busca Encontrada com Sucesso!",
          data: migrante,
        }),
        console.log("Busca Encontrada com Sucesso!")
      );
    } catch (error) {
      res.status(400).send({
        status: 400,
        statusText: "Bad Request",
        message: "Erro da busca. Verifique os Dados!",
      }),
        console.log("Erro da busca. Verifique os Dados!");
    }
  },

  async searchId(req, res) {
    try {
      const migrante = await Migrante.findById(req.params.id);
      if (migrante) {
        res.json({
          status: 200,
          statusText: "OK",
          message: "Busca Encontrada com Sucesso!",
          data: migrante,
        });
        console.log("Busca Encontrada com Sucesso!");
      } else {
        console.log("Erro de Busca. Dados Não Existentes!");
      }
    } catch (error) {
      res.status(400).send({
        status: 400,
        statusText: "Bad Request",
        message: "Erro de Busca. Dados Não Existentes!",
      }),
        console.log("Erro de Busca. Dados Não Existentes!");
    }
  },

  async searchTrabalho(req, res) {
    try {
      const migrante = await Migrante.find({ trabalho: { $eq: "Nao" } });
      if (migrante) {
        res.json({
          status: 200,
          statusText: "OK",
          message: "Busca Encontrada com Sucesso!",
          data: migrante,
        }),
          console.log("Busca Encontrada com Sucesso!");
      } else {
        res.status(404).send({
          status: 404,
          statusText: "Not Found",
          message: "Erro de Busca. Dados Não Exitentes!",
        }),
          console.log("Erro de Busca. Dados Não Existentes!");
      }
    } catch (error) {
      res.status(400).send({
        status: 400,
        statusText: "Bad Request",
        message: "Erro de Busca. Dados Não Existentes!",
      }),
        console.log("Erro de Busca. Dados Não Existentes!");
    }
  },

  async update(req, res) {
    const {
      _id,
      nomeMigrante,
      sobrenomeMigrante,
      dataNascimento,
      sexo,
      emailMigrante,
      telefone,
      paisOrigem,
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
      nivelInstrucao,
      trabalho,
    } = req.body;

    let validation = new guiaValidators();
    validation.hasMinLen(
      req.body.nomeMigrante,
      2,
      "Nome precisa ter no mínimo 2 caracteres!"
    );
    validation.hasMaxLen(
      req.body.nomeMigrante,
      40,
      "Nome precisa ter no máximo 40 caracteres!"
    );
    validation.hasMinLen(
      req.body.sobrenomeMigrante,
      2,
      "Sobrenome precisa ter no mínimo 2 caracteres!"
    );
    validation.hasMaxLen(
      req.body.sobrenomeMigrante,
      40,
      "Sobrenome precisa ter no máximo 40 caracteres!"
    );
    validation.isRequired(req.body.emailMigrante, "O Email é obrigatorio!");
    validation.isEmail(req.body.emailMigrante, "O Email precisa ser válido!");
    validation.hasMinLen(
      req.body.telefone,
      8,
      "Telefone precisa ter no mínimo 8 dígitos!"
    );
    validation.hasMinLen(
      req.body.paisOrigem,
      2,
      "País de Origem precisa ter no mínimo 2 dígitos!"
    );
    validation.hasMaxLen(
      req.body.paisOrigem,
      40,
      "País de Origem precisa ter no máximo 40 caracteres!"
    );
    validation.hasMinLen(
      req.body.cep,
      8,
      "Cep precisa ter no mínimo 8 dígitos!"
    );

    if (!validation.isValid()) {
      res.status(400).send(validation.errors()).end();
      return;
    }
    try {
      let data = {
        nomeMigrante,
        sobrenomeMigrante,
        dataNascimento,
        sexo,
        emailMigrante,
        telefone,
        paisOrigem,
        cep,
        logradouro,
        bairro,
        localidade,
        uf,
        nivelInstrucao,
        trabalho,
      };

      let migrante = await Migrante.findOne({ _id });

      if (migrante) {
        migrante = await Migrante.findOneAndUpdate({ _id }, data, {
          new: true,
        });
        return (
          res.status(201).json({
            status: 201,
            statusText: "Editado",
            message: "Dados Editados com Sucesso!",
            data: migrante,
          }),
          mailer.sendMail(migrante),
          console.log("Dados Editados com Sucesso!")
        );
      } else {
        console.log("Esse email está cadastrado. Verifique os Dados!");
      }
    } catch (error) {
      res.status(400).send({
        status: 400,
        statusText: "Bad Request",
        message: "Erro de Edição. Verifique os Dados!",
      }),
        console.log("Erro de Edição. Verifique os Dados!");
    }
  },

  async delete(req, res) {
    try {
      const migrante = await Migrante.findByIdAndDelete(req.params.id);
      if (migrante) {
        res.status(200).send({
          status: 200,
          statusText: "OK",
          message: "Dados Eliminados com Sucesso!",
        }),
          console.log("Dados Eliminados com Sucesso!");
      } else {
        res.status(400).send({
          status: 400,
          statusText: "Bad Request",
          message: "Dados Não Existentes!!",
        }),
          console.log("Dados Não Existentes!!");
      }
    } catch (error) {
      res.status(400).send({
        status: 400,
        statusText: "Bad Request",
        message: "Erro de Delete. Verifique os Dados!",
      }),
        console.log("Erro de Delete. Verifique os Dados!");
    }
  },
};
