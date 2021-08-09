import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import Inicio from "./Inicio";
import Cadastro from "./Cadastro";
import Listagem from "./Listagem";
import VerMais from "./VerMais";
import Gestao from "./Gestao";
import Edicao from "./Edicao";

function Main() {
  return (
    <Router>
      <div className="Main ">
        <div className="btn-group">
          <NavLink to="/" className="btn- btn-dark" activeClassName="active">
            Inicio
          </NavLink>

          <NavLink
            to="/cadastro"
            className="btn- btn-dark"
            activeClassName="active"
          >
            Cadastro
          </NavLink>

          <NavLink
            to="/listagem"
            className="btn- btn-dark"
            activeClassName="active"
          >
            Listagem
          </NavLink>

          <NavLink
            to="/gestao"
            className="btn- btn-dark"
            activeClassName="active"
          >
            Gestão
          </NavLink>

          {/* <NavLink
            to="/edicao"
            className="btn- btn-dark"
            activeClassName="active"
          >
            Edição
          </NavLink> */}

          {/* <NavLink
            to="/vermais"
            className="btn- btn-dark"
            activeClassName="active"
          >
            Ver Mais...
          </NavLink> */}
        </div>
        <hr />
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
      </div>
    </Router>
  );
}

export default Main;
