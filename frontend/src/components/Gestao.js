import React, { Component } from "react";
import axios from "axios";
//Aplicando estilização com "bootstrap" feita a instalação previa do pacote com npm i bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Usando janelas com estilo "Modal" feita a instalação previa do pacote Reactstrap com npm i reactstrap
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
//Insertando elementos icons desde o framework FontAwesome feita a instalação previa dos pacotes npm i --save @fortawesome/fontawesome-svg-core npm install --save @fortawesome/free-solid-svg-icons npm install --save @fortawesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const url = "http://localhost:5000/migrantes/";

class Gestao extends Component {
  state = {
    data: [],
    modoInsert: false,
    modoDelet: false,
    form: {
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
    },
  };

  metGet = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        this.setState(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  metPost = async () => {
    delete this.state.form._id;
    await axios
      .post("http://localhost:5000/migrante/novo", this.state.form)
      .then((response) => {
        console.log(response);

        this.modoInsert();
        this.metGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  metPut = () => {
    axios
      .put(
        "http://localhost:5000/migrante/" + this.state.form._id,
        this.state.form
      )
      .then((response) => {
        this.modoInsert();
        this.metGet();
      });
  };

  metDelete = () => {
    axios
      .delete("http://localhost:5000/migrante/" + this.state.form._id)
      .then((response) => {
        this.setState({ modoDelet: false });
        this.metGet();
      });
  };

  modoInsert = () => {
    this.setState({ modoInsert: !this.state.modoInsert });
  };

  selecMigrantes = (migrantes) => {
    this.setState({
      tipoModo: "atualizar",
      form: {
        _id: migrantes._id,
        nomeMigrante: migrantes.nomeMigrante,
        sobrenomeMigrante: migrantes.sobrenomeMigrante,
        dataNascimento: migrantes.dataNascimento,
        sexo: migrantes.sexo,
        emailMigrante: migrantes.emailMigrante,
        telefone: migrantes.telefone,
        paisOrigem: migrantes.paisOrigem,
        cep: migrantes.cep,
        logradouro: migrantes.logradouro,
        bairro: migrantes.bairro,
        localidade: migrantes.localidade,
        uf: migrantes.uf,
        nivelInstrucao: migrantes.nivelInstrucao,
        trabalho: migrantes.trabalho,
      },
    });
  };

  handleChange = async (event) => {
    event.persist();
    await this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
    console.log(this.state.form);
  };

  componentDidMount() {
    this.metGet();
  }

  render() {
    const { form } = this.state;
    return (
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="Gestao"
      >
        <h1 style={{ display: "flex", fontSize: 60, textAlign: "center" }}>
          Gestão de Cadastros 📝
        </h1>

        <br />
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              {/* <th>Data de Nascimento</th>
              <th>Sexo</th> */}
              <th>Email</th>
              {/* <th>Telefone</th> */}
              <th>País de Origem</th>
              {/* <th>Cep</th>
              <th>Rua</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Nível de Instrução</th>
              <th>Trabalho</th> */}
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((migrantes) => {
              <li key={migrantes._id} />;
              return (
                <tr>
                  <td>{migrantes.nomeMigrante}</td>
                  <td>{migrantes.sobrenomeMigrante}</td>
                  {/* <td>{migrantes.dataNascimento}</td>
                  <td>{migrantes.sexo}</td> */}
                  <td>{migrantes.emailMigrante}</td>
                  {/* <td>{migrantes.telefone}</td> */}
                  <td>{migrantes.paisOrigem}</td>
                  {/* <td>{migrantes.cep}</td>
                  <td>{migrantes.logradouro}</td>
                  <td>{migrantes.bairro}</td>
                  <td>{migrantes.localidade}</td>
                  <td>{migrantes.uf}</td>
                  <td>{migrantes.nivelInstrucao}</td>
                  <td>{migrantes.trabalho}</td> */}
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.selecMigrantes(migrantes);
                        this.modoInsert();
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    {"  |  "}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.selecMigrantes(migrantes);
                        this.setState({ modoDelet: true });
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Modal isOpen={this.state.modoInsert}>
          <ModalHeader style={{ display: "block" }}>
            <span
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => this.modoInsert()}
            >
              ❌
            </span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Dados Pessonais:_</label> <br />
              <label htmlFor="nomeMigrante">Nome</label>
              <input
                className="form-control"
                type="text"
                name="nomeMigrante"
                id="nomeMigrante"
                required
                onChange={this.handleChange}
                value={form ? form.nomeMigrante : ""}
              />
              <br />
              <label htmlFor="sobrenomeMigrante">Sobrenome</label>
              <input
                className="form-control"
                type="text"
                name="sobrenomeMigrante"
                id="sobrenomeMigrante"
                required
                onChange={this.handleChange}
                value={form ? form.sobrenomeMigrante : ""}
              />
              <br />
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                className="form-control"
                type="date"
                name="dataNascimento"
                id="dataNascimento"
                required
                onChange={this.handleChange}
                value={form ? form.dataNascimento : ""}
              />
              <br />
              <label htmlFor="sexo">Sexo</label>
              <select
                className="form-control"
                type="select"
                name="sexo"
                id="sexo"
                required
                onChange={this.handleChange}
                value={form ? form.sexo : ""}
              >
                <option value={null}>Selecione a opçõe:</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="NaoIndica">Prefero não indicar</option>
              </select>
              <br />
              <label htmlFor="emailMigrante">Email</label>
              <input
                className="form-control"
                type="email"
                name="emailMigrante"
                id="emailMigrante"
                required
                onChange={this.handleChange}
                value={form ? form.emailMigrante : ""}
              />
              <br />
              <label htmlFor="telefone">Telefone</label>
              <input
                className="form-control"
                type="number"
                name="telefone"
                id="telefone"
                required
                onChange={this.handleChange}
                value={form ? form.telefone : ""}
              />
              <br />
              <label htmlFor="paisOrigem">País de Origem</label>
              <input
                className="form-control"
                type="text"
                name="paisOrigem"
                id="paisOrigem"
                required
                onChange={this.handleChange}
                value={form ? form.paisOrigem : ""}
              />
              <br />
              <label>Endereço Atual:_</label> <br />
              <label htmlFor="cep">Cep</label>
              <input
                className="form-control"
                type="text"
                name="cep"
                id="cep"
                onChange={this.handleChange}
                value={form ? form.cep : ""}
              />
              <br />
              <label htmlFor="rua">Rua</label>
              <input
                className="form-control"
                type="text"
                name="logradouro"
                id="logradouro"
                onChange={this.handleChange}
                value={form ? form.logradouro : ""}
              />
              <br />
              <label htmlFor="bairro">Bairro</label>
              <input
                className="form-control"
                type="text"
                name="bairro"
                id="bairro"
                onChange={this.handleChange}
                value={form ? form.bairro : ""}
              />
              <br />
              <label htmlFor="localidade">Cidade</label>
              <input
                className="form-control"
                type="text"
                name="localidade"
                id="localidade"
                onChange={this.handleChange}
                value={form ? form.localidade : ""}
              />
              <br />
              <label htmlFor="uf">Estado</label>
              <input
                className="form-control"
                type="text"
                name="uf"
                id="uf"
                onChange={this.handleChange}
                value={form ? form.uf : ""}
              />
              <br />
              <label>Perfil Pessoal:_</label> <br />
              <label htmlFor="nivelInstrucao">Nível de Instrução</label>
              <select
                className="form-control"
                type="text"
                name="nivelInstrucao"
                id="nivelInstrucao"
                required
                onChange={this.handleChange}
                value={form ? form.nivelInstrucao : ""}
              >
                <option value={null}>Selecione a opçõe:</option>
                <option value="Inicial">Inicial</option>
                <option value="Fundamental">Fundamental</option>
                <option value="Meio">Meio</option>
                <option value="Superior">Superior</option>
                <option value="Postgrado">Postgrado</option>
                <option value="Nenhuma">Nenhuma</option>
              </select>
              <br />
              <label htmlFor="trabalho">Trabalho</label>
              <select
                className="form-control"
                type="text"
                name="trabalho"
                id="trabalho"
                required
                onChange={this.handleChange}
                value={form ? form.trabalho : ""}
              >
                <option value={null}>Selecione a opçõe:</option>
                <option value="Sim">Sim</option>
                <option value="Nao">Não</option>
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            {this.state.tipoModo === "insertar" ? (
              <button
                className="btn btn-success"
                onClick={() => this.metPost()}
              >
                Cadastrar
              </button>
            ) : (
              <button className="btn btn-success" onClick={() => this.metPut()}>
                Editar
              </button>
            )}
            <button
              className="btn btn-danger"
              onClick={() => this.modoInsert()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modoDelet}>
          <ModalBody>
            Esta certo de ELIMINAR a: "{form && form.nomeMigrante}" ?
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => this.metDelete()}>
              Sim
            </button>
            <button
              className="btn btn-success"
              onClick={() => this.setState({ modoDelet: false })}
            >
              Não
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Gestao;
