import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidators from "./schemaValidators";
import "../assets/Cadastro.css";
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

const Cadastro = () => {
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
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className="card-post"
    >
      <h1>C a d a s t r o 📝</h1>
      <div className="line-post1"></div>

      <div className="card-body-post">
        <br />
        <form onSubmit={handleSubmit(metPost)}>
          <div>
            <label>Dados Pessonais_</label> <br />
            <label htmlFor="nomeMigrante">Nome:</label>
            <input
              className="form-control"
              {...register("nomeMigrante")}
              type="text"
              name="nomeMigrante"
              id="nomeMigrante"
              placeholder="Michael Simón"
              onChange={onChange}
            />
            <p className="error-message">{errors.nomeMigrante?.message}</p>
            <br />
            <label htmlFor="sobrenomeMigrante">Sobrenome:</label>
            <input
              className="form-control"
              {...register("sobrenomeMigrante")}
              type="text"
              name="sobrenomeMigrante"
              id="sobrenomeMigrante"
              placeholder="Bolívar Jackson"
              onChange={onChange}
            />
            <p className="error-message">{errors.sobrenomeMigrante?.message}</p>
            <br />
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <input
              className="form-control"
              {...register("dataNascimento")}
              type="date"
              name="dataNascimento"
              id="dataNascimento"
              onChange={onChange}
            />
            <p className="error-message">{errors.dataNascimento?.message}</p>
            <br />
            <label htmlFor="sexo">Sexo:</label>
            <select
              className="form-control"
              {...register("sexo")}
              type="text"
              name="sexo"
              id="sexo"
              onChange={onChange}
            >
              <option value={null}>Selecione uma opçõe_</option>
              <option value={"Feminino"}>Feminino</option>
              <option value={"Masculino"}>Masculino</option>
              <option value={"NaoIndica"}>Prefero não indicar</option>
            </select>
            <p className="error-message">{errors.sexo?.message}</p>
            <br />
            <label htmlFor="emailMigrante">Email:</label>
            <input
              className="form-control"
              {...register("emailMigrante")}
              type="text"
              name="emailMigrante"
              id="emailMigrante"
              placeholder="michaelsimon@gmail.com"
              onChange={onChange}
            />
            <p className="error-message">{errors.emailMigrante?.message}</p>
            <br />
            <label htmlFor="telefone">Telefone:</label>
            <input
              className="form-control"
              {...register("telefone")}
              type="number"
              name="telefone"
              id="telefone"
              placeholder="48 91809673"
              onChange={onChange}
            />
            <p className="error-message">{errors.telefone?.message}</p>
            <br />
            <label htmlFor="paisOrigem">País de Origem:</label>
            <input
              className="form-control"
              {...register("paisOrigem")}
              type="text"
              name="paisOrigem"
              id="paisOrigem"
              placeholder="Venezuela"
              onChange={onChange}
            />
            <p className="error-message">{errors.paisOrigem?.message}</p>
            <br />
            <div className="line-post2"></div>
            <label>Endereço Atual_</label> <br />
            <label htmlFor="cep">Cep:</label>
            <input
              className="form-control"
              {...register("cep")}
              type="text"
              name="cep"
              id="cep"
              placeholder="88101280"
              onChange={onChange}
            />
            <p className="error-message">{errors.cep?.message}</p>
            <br />
            <label htmlFor="logradouro">Rua:</label>
            <input
              className="form-control"
              {...register("logradouro")}
              type="text"
              name="logradouro"
              id="logradouro"
              placeholder="Rua Dona Josefa"
              onChange={onChange}
            />
            <p className="error-message">{errors.logradouro?.message}</p>
            <br />
            <label htmlFor="bairro">Bairro:</label>
            <input
              className="form-control"
              {...register("bairro")}
              type="text"
              name="bairro"
              id="bairro"
              placeholder="Wilson José"
              onChange={onChange}
            />
            <p className="error-message">{errors.bairro?.message}</p>
            <br />
            <label htmlFor="localidade">Cidade:</label>
            <input
              className="form-control"
              {...register("localidade")}
              type="text"
              name="localidade"
              id="localidade"
              placeholder="Disneylandia"
              onChange={onChange}
            />
            <p className="error-message">{errors.localidade?.message}</p>
            <br />
            <label htmlFor="uf">Estado:</label>
            <input
              className="form-control"
              {...register("uf")}
              type="text"
              name="uf"
              id="uf"
              placeholder="Nebraska"
              onChange={onChange}
            />
            <p className="error-message">{errors.uf?.message}</p>
            <br />
            <div className="line-post2"></div>
            <label>Perfil Pessoal_</label> <br />
            cd
            <label htmlFor="nivelInstrucao">Nível de Instrução:</label>
            <select
              className="form-control"
              {...register("nivelInstrucao")}
              type="text"
              name="nivelInstrucao"
              id="nivelInstrucao"
              onChange={onChange}
            >
              <option value={null}>Selecione uma opçõe_</option>
              <option value="Inicial">Inicial</option>
              <option value="Fundamental">Fundamental</option>
              <option value="Meio">Meio</option>
              <option value="Superior">Superior</option>
              <option value="Postgrado">Postgrado</option>
              <option value="Nenhuma">Nenhuma</option>
            </select>
            <p className="error-message">{errors.nivelInstrucao?.message}</p>
            <br />
            <label htmlFor="trabalho">Tem Emprego?</label>
            <select
              className="form-control"
              {...register("trabalho")}
              type="text"
              name="trabalho"
              id="trabalho"
              onChange={onChange}
            >
              <option value={null}>Selecione uma opçõe_</option>
              <option value="Sim">Sim</option>
              <option value="Nao">Não</option>
            </select>
            <p className="error-message">{errors.trabalho?.message}</p>
          </div>

          <div className="btn-post">
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Cadastro;
