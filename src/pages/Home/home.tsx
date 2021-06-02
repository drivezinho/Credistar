import { Link } from "react-router-dom";
import cadastrar_empresa from "../../images/icons/cadastrar_empresa.png";
import Home from "../../images/icons/Home.png";
import "./home.css";

export default () => {
  return (
    <>
      <h5 className="titulo-inicio">Inicio</h5>
      <div className="lista-empresa">
        <Link to="/">
          <img src={Home} className="lista-empresa-icon" />
        </Link>
      </div>
      <div className="cadastrar_empresa">
        <Link to="/">
          <img src={cadastrar_empresa} className="cadastrar_empresa-icon" />
        </Link>
      </div>
    </>
  );
};
