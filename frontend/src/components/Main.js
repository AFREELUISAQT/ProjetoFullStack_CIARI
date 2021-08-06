import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import Inicio from "./Inicio";
import Cadastro from "./Cadastro";
import List from "./List";
import Gestao from "./Gestao";

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
            to="/list"
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
            Gestao
          </NavLink>
        </div>

        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>

          <Route path="/cadastro">
            <Cadastro />
          </Route>

          <Route path="/list">
            <List />
          </Route>

          <Route path="/gestao">
            <Gestao />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Main;
