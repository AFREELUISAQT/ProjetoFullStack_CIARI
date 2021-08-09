import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSearch, faEye } from "@fortawesome/free-solid-svg-icons";

function Listagem() {
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
          .includes(terminoBusca.toLowerCase()) ||
        elemento.trabalho
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
    <div>
      <h1>Listagem de Cadastros</h1>
      <div className="containerInput">
        <label>
          Busca pelo: <br />
          Nome, <br />
          ou Email, <br />
          ou Status Laboral
        </label>
        <input
          className="form-control inputBuscar"
          value={busca}
          placeholder="Digite o Nome ou Email ou Status Laboral (Trabalha? 'Sim' ou 'Nao')"
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
              {/* <th>País de Origem</th> */}
              {/* <th>Cep</th>
              <th>Rua</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Nível de Instrução</th> */}
              <th>Trabalha?</th>
              <th>
                Opçõe <br /> Ver Mais...
              </th>
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
                  {/* <td>{migrantes.paisOrigem}</td> */}
                  {/* <td>{migrantes.cep}</td>
                  <td>{migrantes.logradouro}</td>
                  <td>{migrantes.bairro}</td>
                  <td>{migrantes.localidade}</td>
                  <td>{migrantes.uf}</td>
                  <td>{migrantes.nivelInstrucao}</td> */}
                  <td>{migrantes.trabalho}</td>
                  <td>
                    <Link to={{ pathname: `/vermais/${migrantes._id}` }}>
                      <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Listagem;
