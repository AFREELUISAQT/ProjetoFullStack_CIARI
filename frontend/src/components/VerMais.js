import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidators from "./schemaValidators";
import swal from "sweetalert";
import { useHistory, useParams } from "react-router";
import { Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "relative",
    width: 800,
    backgroundColor: "white",
    border: "2px solid #000",
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: "16px 32px 24px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "1000px",
    overflow: "auto",
  },
  textfield: {
    width: "100%",
  },
  button: {
    textAlign: "center",
  },
}));

const VerMais = () => {
  const styles = useStyles();

  const [modal, setModal] = useState(true);
  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaValidators),
  });

  const { id } = useParams();
  let history = useHistory();

  const metPut = (data) =>
    axios
      .put(`http://localhost:5000/migrante/${id}`, data)
      .then(() => {
        console.log(data);
        swal("Valeu!", "Edição feita com Sucesso.", "success");
        history.push("/gestao");
      })
      .catch((error) => {
        console.log(error.message);
        swal("Esse Email já Existe!", "Verifique os Dados.", "error");
      });

  useEffect(() => {
    axios.get(`http://localhost:5000/migrante/${id}`).then((response) => {
      console.log(response.data.data);
      reset(response.data.data);
    });
  }, []);

  return (
    <div>
      <div>
        <Modal open={modal} onClose={abrirCerrarModal}>
          <div className={styles.modal}>
            <h1>M a i s d e ... 👀</h1>
            <div className="line-post1"></div>

            <div className="card-body-post">
              <br />
              <form onSubmit={handleSubmit(metPut)}>
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
                    disabled
                    readOnly
                  />
                  <p className="error-message">
                    {errors.nomeMigrante?.message}
                  </p>
                  <br />
                  <label htmlFor="sobrenomeMigrante">Sobrenome:</label>
                  <input
                    className="form-control"
                    {...register("sobrenomeMigrante")}
                    type="text"
                    name="sobrenomeMigrante"
                    id="sobrenomeMigrante"
                    placeholder="Bolívar Jackson"
                    disabled
                    readOnly
                  />
                  <p className="error-message">
                    {errors.sobrenomeMigrante?.message}
                  </p>
                  <br />
                  <label htmlFor="dataNascimento">Data de Nascimento:</label>
                  <input
                    className="form-control"
                    {...register("dataNascimento")}
                    type="date"
                    name="dataNascimento"
                    id="dataNascimento"
                    disabled
                    readOnly
                  />
                  <p className="error-message">
                    {errors.dataNascimento?.message}
                  </p>
                  <br />
                  <label htmlFor="sexo">Sexo:</label>
                  <select
                    className="form-control"
                    {...register("sexo")}
                    type="text"
                    name="sexo"
                    id="sexo"
                    disabled
                    readOnly
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
                    disabled
                    readOnly
                  />
                  <p className="error-message">
                    {errors.emailMigrante?.message}
                  </p>
                  <br />
                  <label htmlFor="telefone">Telefone:</label>
                  <input
                    className="form-control"
                    {...register("telefone")}
                    type="number"
                    name="telefone"
                    id="telefone"
                    placeholder="48 91809673"
                    disabled
                    readOnly
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
                    disabled
                    readOnly
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
                    disabled
                    readOnly
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
                    disabled
                    readOnly
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
                    disabled
                    readOnly
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
                    disabled
                    readOnly
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
                    disabled
                    readOnly
                  />
                  <p className="error-message">{errors.uf?.message}</p>
                  <br />
                  <div className="line-post2"></div>
                  <label>Perfil Pessoal_</label> <br />
                  <label htmlFor="nivelInstrucao">Nível de Instrução:</label>
                  <select
                    className="form-control"
                    {...register("nivelInstrucao")}
                    type="text"
                    name="nivelInstrucao"
                    id="nivelInstrucao"
                    disabled
                    readOnly
                  >
                    <option value={null}>Selecione uma opçõe_</option>
                    <option value="Inicial">Inicial</option>
                    <option value="Fundamental">Fundamental</option>
                    <option value="Meio">Meio</option>
                    <option value="Superior">Superior</option>
                    <option value="Postgrado">Postgrado</option>
                    <option value="Nenhuma">Nenhuma</option>
                  </select>
                  <p className="error-message">
                    {errors.nivelInstrucao?.message}
                  </p>
                  <br />
                  <label htmlFor="trabalho">Tem Emprego?</label>
                  <select
                    className="form-control"
                    {...register("trabalho")}
                    type="text"
                    name="trabalho"
                    id="trabalho"
                    disabled
                    readOnly
                  >
                    <option value={null}>Selecione uma opçõe_</option>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                  </select>
                  <p className="error-message">{errors.trabalho?.message}</p>
                </div>

                <div className="btn-post">
                  <Button
                    className="btn-danger"
                    onClick={() => abrirCerrarModal()}
                    href="/listagem"
                  >
                    Cerrar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default VerMais;
