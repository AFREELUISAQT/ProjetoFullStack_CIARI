import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import {
  faSearch,
  faTrashAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

function Gestao() {
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

  function metDelete(id) {
    swal({
      title: "Apagar dados",
      text: "Você tem certeza de apagar os dados?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:5000/migrante/${id}`)
          .then((response) => {
            console.log(response.data.data);
            setList(list.filter((list) => list._id !== id));
          });
        swal("Dados apagados com sucesso!", {
          icon: "success",
        });
      } else {
        swal("Seu dado está seguro!");
      }
    });
  }

  return (
    <div className="containerGeral marginTop">
      <h2>Gestão de cadastros</h2>
      <div className="center">
        <div>
          <h5>
            Busca pelo:
            Nome,
            ou Email,
            ou Status Laboral
          </h5>
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
              <th className="coluna">
                OPERAÇÕES <br /> EDITAR | APAGAR
              </th>
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
                    <Link to={{ pathname: `/edicao/${migrantes._id}` }}>
                      <button className="buttonVer">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Link>

                    {"  |  "}

                    <button
                      className="buttonEditar"
                      onClick={() => metDelete(migrantes._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
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

export default Gestao;
