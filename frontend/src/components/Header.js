import React, {useState} from "react";
import LogoCIARI from '../assets/imagens/LogoCIARI.png';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Inicio from "./Inicio";
import Cadastro from "./Cadastro";
import Listagem from "./Listagem";
import VerMais from "./VerMais";
import Gestao from "./Gestao";
import Edicao from "./Edicao";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const onClick = () => {
    setMenuOpen(!menuOpen);
  };

  const menuClassOpen = menuOpen ? "nav-menu_visible" : ""  

  return (
    <Router>
        <div className="header">
          <nav className="nave"> 
            <div><img  className="logo" src={LogoCIARI} alt="logo CIARI" width="260"></img></div>
            <div><ul className={`nav-menu ${menuClassOpen}`}>
                <li className="nav-menu-item">
                    <Link to="/" className="nav-menu-link nav-menu-link_active" onClick={onClick}>
                        Inicio
                    </Link>
                </li>
                <li className="nav-menu-item">             
                    <Link to="/cadastro" className="nav-menu-link" onClick={onClick}>
                        Cadastro
                    </Link>
                </li> 
                <li className="nav-menu-item">              
                    <Link to="/listagem" className="nav-menu-link" onClick={onClick}>
                        Listagem
                    </Link>
                </li>
                <li className="nav-menu-item">                
                    <Link to="/gestao" className="nav-menu-link" onClick={onClick}>
                        Gestao
                    </Link>
                </li> 
            </ul>
            <button id="nav-toggle" onClick={onClick}>
                    <div id="b1"></div>
                    <div id="b2"></div>
                    <div id="b3"></div>
            </button>
          </div>
          </nav> 
        </div>
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>

          <Route path="/cadastro">
            <Cadastro />
          </Route>

          <Route path="/listagem">
            <Listagem />
          </Route>

          <Route path="/gestao">
            <Gestao />
          </Route>

          <Route path="/edicao/:id">
            <Edicao />
          </Route>

          <Route path="/vermais/:id">
            <VerMais />
          </Route>          
        </Switch>
    </Router>
  );
}

export default Header;
