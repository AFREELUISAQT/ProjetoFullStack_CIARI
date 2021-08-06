import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEye } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function List() {
  const [list, setList] = useState([]);
  const [tablaList, setTablaList] = useState([]);
  const [busca, setBusca] = useState("");

  const metGet = async () => {
    await axios
      .get("http://localhost:5000/migrantes")
      .then((response) => {
        setList(response.data.data);
        setTablaList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setBusca(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusca) => {
    var resultBusca = tablaList.filter((elemento) => {
      if (
        elemento.nomeMigrante
          .toString()
          .toLowerCase()
          .includes(terminoBusca.toLowerCase()) ||
        elemento.emailMigrante
          .toString()
          .toLowerCase()
          .includes(terminoBusca.toLowerCase())
      ) {
        return elemento;
      }
    });
    setList(resultBusca);
  };

  useEffect(() => {
    metGet();
  }, []);

  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busca}
          placeholder="Busca pelo Nome ou Email"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-sm table-bordered">
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
            {list &&
              list.map((migrantes) => (
                <tr key={migrantes._id}>
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
                        <Modal isOpen={console.log("abrir modal")}>
                          <ModalHeader style={{ display: "block" }}>
                            <span
                              style={{ float: "right", cursor: "pointer" }}
                              onClick={() =>
                                console.log("clicando boton modal")()
                              }
                            >
                              ❌
                            </span>
                          </ModalHeader>
                          <ModalBody>
                            <div className="form-group">
                              <label>Dados Pessonais_</label> <br />
                              <label htmlFor="nomeMigrante">Nome:</label>
                              <input
                                className="form-control"
                                type="text"
                                name="nomeMigrante"
                                id="nomeMigrante"
                                readOnly
                                //value={form ? form.nomeMigrante : ""}
                              />
                              <br />
                              <label htmlFor="sobrenomeMigrante">
                                Sobrenome:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="sobrenomeMigrante"
                                id="sobrenomeMigrante"
                                readOnly
                                //value={form ? form.sobrenomeMigrante : ""}
                              />
                              <br />
                              <label htmlFor="dataNascimento">
                                Data de Nascimento:
                              </label>
                              <input
                                className="form-control"
                                type="date"
                                name="dataNascimento"
                                id="dataNascimento"
                                readOnly
                                //value={form ? form.dataNascimento : ""}
                              />
                              <br />
                              <label htmlFor="sexo">Sexo:</label>
                              <input
                                className="form-control"
                                type="text"
                                name="sexo"
                                id="sexo"
                                readOnly
                                //value={form ? form.sexo : ""}
                              />
                              <br />
                              <label htmlFor="emailMigrante">Email:</label>
                              <input
                                className="form-control"
                                type="email"
                                name="emailMigrante"
                                id="emailMigrante"
                                readOnly
                                //value={form ? form.emailMigrante : ""}
                              />
                              <br />
                              <label htmlFor="telefone">Telefone:</label>
                              <input
                                className="form-control"
                                type="number"
                                name="telefone"
                                id="telefone"
                                readOnly
                                //value={form ? form.telefone : ""}
                              />
                              <br />
                              <label htmlFor="paisOrigem">
                                País de Origem:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="paisOrigem"
                                id="paisOrigem"
                                readOnly
                                //value={form ? form.paisOrigem : ""}
                              />
                              <br />
                              <label>Endereço Atual_</label> <br />
                              <label htmlFor="cep">Cep:</label>
                              <input
                                className="form-control"
                                type="text"
                                name="cep"
                                id="cep"
                                readOnly
                                //value={form ? form.cep : ""}
                              />
                              <br />
                              <label htmlFor="logradouro">Rua:</label>
                              <input
                                className="form-control"
                                type="text"
                                name="logradouro"
                                id="logradouro"
                                readOnly
                                //value={form ? form.logradouro : ""}
                              />
                              <br />
                              <label htmlFor="bairro">Bairro:</label>
                              <input
                                className="form-control"
                                type="text"
                                name="bairro"
                                id="bairro"
                                readOnly
                                //value={form ? form.bairro : ""}
                              />
                              <br />
                              <label htmlFor="localidade">Cidade:</label>
                              <input
                                className="form-control"
                                type="text"
                                name="localidade"
                                id="localidade"
                                readOnly
                                //value={form ? form.localidade : ""}
                              />
                              <br />
                              <label htmlFor="uf">Estado:</label>
                              <input
                                className="form-control"
                                type="text"
                                name="uf"
                                id="uf"
                                readOnly
                                //value={form ? form.uf : ""}
                              />
                              <br />
                              <label>Perfil Pessoal_</label> <br />
                              <label htmlFor="nivelInstrucao">
                                Nível de Instrução:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="nivelInstrucao"
                                id="nivelInstrucao"
                                readOnly
                                //value={form ? form.nivelInstrucao : ""}
                              />
                              <br />
                              <label htmlFor="trabalho">Trabalha?</label>
                              <input
                                className="form-control"
                                type="text"
                                name="trabalho"
                                id="trabalho"
                                readOnly
                                //value={form ? form.trabalho : ""}
                              />
                            </div>
                          </ModalBody>
                          <ModalFooter>
                            <button
                              className="btn btn-danger"
                              onClick={() => console.log("eatoy en el modal")}
                            >
                              Cerrar
                            </button>
                          </ModalFooter>
                        </Modal>;
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
