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

class Main extends Component {
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
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
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
    axios.put(url + this.state.form._id, this.state.form).then((response) => {
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
        rua: migrantes.rua,
        numero: migrantes.numero,
        complemento: migrantes.complemento,
        bairro: migrantes.bairro,
        cidade: migrantes.cidade,
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
        [event.data.nomeMigrante]: event.data.value,
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
      <div style={{ display: "flex", flexDirection: "column" }} className="App">
        <h1 style={{ display: "flex", fontSize: 80, textAlign: "center" }}>
          Listando Cadastros 📝
        </h1>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({ form: null, tipoModo: "insertar" });
            this.modoInsert();
          }}
        >
          Cadastro ✅
        </button>
        <br />
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Data de Nascimento</th>
              <th>Sexo</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>País de Origem</th>
              <th>Cep</th>
              <th>Rua</th>
              <th>Numero</th>
              <th>Complemento</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Nível de Instrução</th>
              <th>Trabalho</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((migrantes) => {
              return (
                <tr>
                  <td>{migrantes.nomeMigrante}</td>
                  <td>{migrantes.sobrenomeMigrante}</td>
                  <td>{migrantes.dataNascimento}</td>
                  <td>{migrantes.sexo}</td>
                  <td>{migrantes.emailMigrante}</td>
                  <td>{migrantes.telefone}</td>
                  <td>{migrantes.paisOrigem}</td>
                  <td>{migrantes.cep}</td>
                  <td>{migrantes.rua}</td>
                  <td>{migrantes.numero}</td>
                  <td>{migrantes.complemento}</td>
                  <td>{migrantes.bairro}</td>
                  <td>{migrantes.cidade}</td>
                  <td>{migrantes.uf}</td>
                  <td>{migrantes.nivelInstrucao}</td>
                  <td>{migrantes.trabalho}</td>
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
              <label htmlFor="id">#</label>
              <input
                className="form-control"
                type="text"
                name="id"
                id="id"
                readOnly
                onChange={this.handleChange}
                value={form ? form._id : this.state.data.length + 1}
              />
              <br />
              <label htmlFor="nomeMigrante">Nome</label>
              <input
                className="form-control"
                type="text"
                name="nomeMigrante"
                id="nomeMigrante"
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
                onChange={this.handleChange}
                value={form ? form.sobrenomeMigrante : ""}
              />
              <br />
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                className="form-control"
                type="text"
                name="dataNascimento"
                id="dataNascimento"
                onChange={this.handleChange}
                value={form ? form.dataNascimento : ""}
              />
              <br />
              <label htmlFor="sexo">Sexo</label>
              <input
                className="form-control"
                type="text"
                name="sexo"
                id="sexo"
                onChange={this.handleChange}
                value={form ? form.sexo : ""}
              />
              <br />
              <label htmlFor="emailMigrante">Email</label>
              <input
                className="form-control"
                type="text"
                name="emailMigrante"
                id="emailMigrante"
                onChange={this.handleChange}
                value={form ? form.emailMigrante : ""}
              />
              <br />
              <label htmlFor="telefone">Telefone</label>
              <input
                className="form-control"
                type="text"
                name="telefone"
                id="telefone"
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
                onChange={this.handleChange}
                value={form ? form.paisOrigem : ""}
              />
              <br />
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
                name="rua"
                id="rua"
                onChange={this.handleChange}
                value={form ? form.rua : ""}
              />
              <br />
              <label htmlFor="numero">Numero</label>
              <input
                className="form-control"
                type="text"
                name="numero"
                id="numero"
                onChange={this.handleChange}
                value={form ? form.numero : ""}
              />
              <br />
              <label htmlFor="complemento">Complemento</label>
              <input
                className="form-control"
                type="text"
                name="complemento"
                id="complemento"
                onChange={this.handleChange}
                value={form ? form.complemento : ""}
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
              <label htmlFor="cidade">Cidade</label>
              <input
                className="form-control"
                type="text"
                name="cidade"
                id="cidade"
                onChange={this.handleChange}
                value={form ? form.cidade : ""}
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
              <label htmlFor="nivelInstrucao">Nível de Instrução</label>
              <input
                className="form-control"
                type="text"
                name="nivelInstrucao"
                id="nivelInstrucao"
                onChange={this.handleChange}
                value={form ? form.nivelInstrucao : ""}
              />
              <br />
              <label htmlFor="trabalho">Trabalho</label>
              <input
                className="form-control"
                type="text"
                name="trabalho"
                id="trabalho"
                onChange={this.handleChange}
                value={form ? form.trabalho : ""}
              />
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
              <button className="btn btn-primary" onClick={() => this.metPut()}>
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
            Esta certo de eliminar a Pessoa "{form && form.nomeMigrante}" ?
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => this.metDelete()}>
              Sim
            </button>
            <button
              className="btn btn-secundary"
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
export default Main;
