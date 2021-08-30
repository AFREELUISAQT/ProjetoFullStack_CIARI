import React from "react";
import foto1 from "../assets/imagens/foto1.jpg";
import foto2 from "../assets/imagens/foto2.jpeg";
import foto3 from "../assets/imagens/foto3.jpg";
import foto4 from "../assets/imagens/foto4.jpeg";

const Inicio = () => {
  return (
    <div className="containerGeral">
      <div id="slider">
        <div className="textoBanner">
          <h1>Bem-vindos ao *SistCIARI*</h1>
          <p>
            Sistema de Cadastro do Centro de Inclusão e Ajuda para Refugiados e
            Imigrantes
          </p>
        </div>
        <ul>
          <li>
            <img src={foto1} alt=""></img>
          </li>
          <li>
            <img src={foto2} alt=""></img>
          </li>
          <li>
            <img src={foto3} alt=""></img>
          </li>
          <li>
            <img src={foto4} alt=""></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inicio;
