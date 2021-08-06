import React from "react";
import { Carousel } from "react-bootstrap";

import img1 from "../assets/imagens/1.png";
import img2 from "../assets/imagens/2.png";
import img3 from "../assets/imagens/3.png";
import img4 from "../assets/imagens/4.png";
import img5 from "../assets/imagens/5.png";
import img6 from "../assets/imagens/6.png";
import img7 from "../assets/imagens/7.png";
import img8 from "../assets/imagens/8.png";
import img9 from "../assets/imagens/9.png";
import img10 from "../assets/imagens/10.png";
import img11 from "../assets/imagens/11.png";
import img12 from "../assets/imagens/12.png";
import img13 from "../assets/imagens/13.png";
import img14 from "../assets/imagens/14.png";
import img15 from "../assets/imagens/15.png";
import img16 from "../assets/imagens/16.png";
import img17 from "../assets/imagens/17.png";
import img18 from "../assets/imagens/18.png";
import img19 from "../assets/imagens/19.png";
import img20 from "../assets/imagens/20.png";

const Inicio = () => {
  return (
    <div>
      <div>
        <h3>Bem-vindos ao - SistCIARI -</h3>
        <p>
          Sistema de Cadastro do Centro de Inclusão e Ajuda para Refugiados e
          Imigrantes
        </p>
      </div>
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img1} alt="Imagen1" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Imagen2"
            objectFit="cover"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img3} alt="Imagen3" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img4} alt="Imagen4" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img5} alt="Imagen5" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img6} alt="Imagen6" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img7} alt="Imagen7" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img8} alt="Imagen8" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img9} alt="Imagen9" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img10} alt="Imagen10" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img11} alt="Imagen11" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img12} alt="Imagen12" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img13} alt="Imagen13" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img14} alt="Imagen14" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img15} alt="Imagen15" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img16} alt="Imagen16" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img17} alt="Imagen17" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img18} alt="Imagen18" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img19} alt="Imagen19" />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img20} alt="Imagen20" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Inicio;
