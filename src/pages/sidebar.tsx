import "./sidebar.css";
import { Link } from "react-router-dom";
import Rectangle3 from "../../images/icons/Rectangle3.png";
import IconBranco from "../../images/icons/IconBranco.png";
import Home_work from "../../images/icons/home_work.png";
import Group from "../../images/icons/Group.png";

export default () => {
  return (
    <nav className="sidebar">
      <Link to="/">
        <img src={IconBranco} className="IconBranco" />
      </Link>

      <Link to="/">
        <img src={Home_work} className="Home_Work" />
      </Link>

      <Link to="/Cadastrar">
        <img src={Group} className="Group" />
      </Link>
    </nav>
  );
};
