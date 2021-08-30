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
    <div className="containerGeral marginTop">
      <h2>Listagem de cadastros</h2>
      <div className="center">
        <div>
          <h5>Busca pelo: Nome, ou Email, ou Status Laboral</h5>
        </div>
        <input
          value={busca}
          placeholder="Digite o Nome ou Email ou Status Laboral (trabalha: 'Sim' ou 'Nao')"
          size="60"
          onChange={handleChange}
        />
        <button className="Button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div>
        <table className="table1">
          <thead>
            <tr>
              <th className="coluna">NOME</th>
              <th className="coluna">EMAIL</th>
              <th className="coluna">TRABALHO</th>
              <th className="coluna">MAIS DADOS</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((migrantes) => (
                <tr key={migrantes._id}>
                  <td className="coluna">{migrantes.nomeMigrante}</td>
                  <td className="coluna">{migrantes.emailMigrante}</td>
                  <td className="coluna">{migrantes.trabalho}</td>
                  <td className="coluna">
                    <Link to={{ pathname: `/vermais/${migrantes._id}` }}>
                      <button className="buttonVer">
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
