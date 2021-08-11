import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidators from "./schemaValidators";
import swal from "sweetalert";

const initialValue = {
  _id: "",
  nomeMigrante: "",
  sobrenomeMigrante: "",
  dataNascimento: "",
  sexo: "",
  emailMigrante: "",
  telefone: "",
  paisOrigem: "",
  cep: "",
  logradouro: "",
  bairro: "",
  localidade: "",
  uf: "",
  nivelInstrucao: "",
  trabalho: "",
};

const Cadastro02 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    //trigger,
  } = useForm({
    resolver: yupResolver(schemaValidators),
  });

  const [values, setValues] = useState(initialValue);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }
  const metPost = (data) =>
    axios
      .post("http://localhost:5000/migrante/novo", values)
      .then((response) => {
        console.log(response);
        swal("Valeu!", "Cadastro feito com Sucesso", "success");
        // window.alert("Deu Tudo Certo!");
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        swal("Verifique os Dados!", "Esse email já Existe.", "error");
        //window.alert("Esse email está cadastrado. Verifique os Dados!");
      });

  return (
    <div className="marginTop">

        <form onSubmit={handleSubmit(metPost)}>
        <div className="card color1"> 
          <h2>C a d a s t r o </h2>
          <div className="center"><h3>Dados Pessoais:</h3></div>
          <div className="formCadastro">
            <div className="campo">
              <label>Nome:</label>
              <input
                  {...register("nomeMigrante")}
                  className="form-control"
                  type="text"
                  name="nomeMigrante"
                  id="nomeMigrante"
                  placeholder="Michael Simón"
                  onChange={onChange}
              />
              <p className="error-message">{errors.nomeMigrante?.message}</p>
            </div>
            
            <div className="campo">
              <label>Sobrenome:</label>
              <input
                  {...register("sobrenomeMigrante")}
                  className="form-control"
                  type="text"
                  name="sobrenomeMigrante"
                  id="sobrenomeMigrante"
                  placeholder="Bolívar Jackson"
                  onChange={onChange}
              />
              <p className="error-message">{errors.sobrenomeMigrante?.message}</p>
            </div>

            <div className="campo">
              <label>Data de Nascimento:</label>
              <input
                  {...register("dataNascimento")}
                  className="form-control"
                  type="date"
                  name="dataNascimento"
                  id="dataNascimento"
                  onChange={onChange}
              />
              <p className="error-message">{errors.dataNascimento?.message}</p>
            </div>

            <div className="campo">           
              <label>Sexo:</label>
              <select
                  {...register("sexo")}
                  className="form-control"
                  type="text"
                  name="sexo"
                  id="sexo"
                  onChange={onChange}
              >
                  <option value={""}>Selecione uma opçõe_</option>
                  <option value={"Feminino"}>Feminino</option>
                  <option value={"Masculino"}>Masculino</option>
                  <option value={"NaoIndica"}>Prefero não indicar</option>
              </select>
              <p className="error-message">{errors.sexo?.message}</p>
            </div>

            <div className="campo">
              <label>Email:</label>
              <input
                  {...register("emailMigrante")}
                  className="form-control"
                  type="text"
                  name="emailMigrante"
                  id="emailMigrante"
                  placeholder="michaelsimon@gmail.com"
                  onChange={onChange}
              />
              <p className="error-message">{errors.emailMigrante?.message}</p>
            </div>

            <div className="campo">
              <label>Telefone:</label>
              <input
                {...register("telefone")}
                className="form-control"
                type="number"
                name="telefone"
                id="telefone"
                placeholder="48 91809673"
                onChange={onChange}
              />
              <p className="error-message">{errors.telefone?.message}</p>
            </div>

            <div className="campo">
              <label>País de Origem:</label>
              <input
                {...register("paisOrigem")}
                className="form-control"
                type="text"
                name="paisOrigem"
                id="paisOrigem"
                placeholder="Venezuela"
                onChange={onChange}
              />
              <p className="error-message">{errors.paisOrigem?.message}</p>
            </div>

            <div className="campo">
              <label>Cep:</label>
              <input
                {...register("cep")}
                className="form-control"
                type="text"
                name="cep"
                id="cep"
                placeholder="88101280"
                onChange={onChange}
              />
              <p className="error-message">{errors.cep?.message}</p>
            </div>

            <div className="campo">
              <label>Rua:</label>
              <input
                className="form-control"
                {...register("logradouro")}
                className="form-control"
                type="text"
                name="logradouro"
                id="logradouro"
                placeholder="Rua Dona Josefa"
                onChange={onChange}
              />
              <p className="error-message">{errors.logradouro?.message}</p>
            </div>

            <div className="campo">
              <label>Bairro:</label>
              <input
                {...register("bairro")}
                className="form-control"
                type="text"
                name="bairro"
                id="bairro"
                placeholder="Wilson José"
                onChange={onChange}
              />
              <p className="error-message">{errors.bairro?.message}</p>
            </div>

            <div className="campo">
              <label>Cidade:</label>
              <input
                {...register("localidade")}
                className="form-control"
                type="text"
                name="localidade"
                id="localidade"
                placeholder="Disneylandia"
                onChange={onChange}
              />
              <p className="error-message">{errors.localidade?.message}</p>
            </div>

            <div className="campo">
              <label>Estado:</label>
              <input
                {...register("uf")}
                className="form-control"
                type="text"
                name="uf"
                id="uf"
                placeholder="Nebraska"
                onChange={onChange}
              />
              <p className="error-message">{errors.uf?.message}</p>
            </div>

            <div className="campo">
              <label>Nível de Instrução:</label>
              <select
                className="form-control"
                {...register("nivelInstrucao")}
                type="text"
                name="nivelInstrucao"
                id="nivelInstrucao"
                onChange={onChange}
              >
                <option value={""}>Selecione uma opçõe_</option>
                <option value="Inicial">Inicial</option>
                <option value="Fundamental">Fundamental</option>
                <option value="Meio">Meio</option>
                <option value="Superior">Superior</option>
                <option value="Postgrado">Postgrado</option>
                <option value="Nenhuma">Nenhuma</option>
              </select>
              <p className="error-message">{errors.nivelInstrucao?.message}</p>
            </div>

            <div className="campo">
              <label>Tem Emprego?</label>
              <select
                className="form-control"
                {...register("trabalho")}
                type="text"
                name="trabalho"
                id="trabalho"
                onChange={onChange}
              >
                <option value={""}>Selecione uma opçõe_</option>
                <option value="Sim">Sim</option>
                <option value="Nao">Não</option>
              </select>
              <p className="error-message">{errors.trabalho?.message}</p>
            </div>
          </div>
          <div className="center">
            <button className="Button" type="submit">Salvar</button>
          </div>

          </div>
        </form>
      </div>
  );
};
export default Cadastro02;
