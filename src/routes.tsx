import React from "react";
import { Switch, Route } from "react-router-dom";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Home from "./pages/Home/home";
import Tasks from "./pages/Tasks";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Cadastrar" exact component={Cadastrar} />
      <Route path="/tarefas" exact component={Tasks} />
    </Switch>
  );
};

export default Routes;
