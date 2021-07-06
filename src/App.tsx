import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Cadastrar } from "./pages/Cadastrar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Cadastrar" exact component={Cadastrar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
