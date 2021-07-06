import { Link } from "react-router-dom";
import cadastrar_empresa from "../images/icons/cadastrar_empresa.png";
import HomeIcon from "../images/icons/Home.png";
import IconBranco from "../images/icons/IconBranco.png";
import Home_work from "../images/icons/home_work.png";
import Group from "../images/icons/Group.png";
import Shape from "../images/icons/Shape.png";
import { AppBar, Drawer, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: "#E5E5E5",
  },
  HeadBar: {
    boxShadow: "none",
    background: "#FFFFFF",
  },
  Logo: {
    width: 26,
    height: 17,
    blend: "Pass through",
  },
  drawer: {
    width: 64,
    flexShrink: 0,
    background: "blue",
  },
  drawerPaper: {
    width: 64,
    background: "#1B1D29",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  drawerContainer: {
    overflow: "auto",
  },

  IconBranco: {
    position: "absolute",
    left: 22,
    right: 0,
    top: 25,
    bottom: 5.56,
  },

  HomeWork: {
    position: "absolute",
    left: 22,
    right: 0,
    top: 83,
    bottom: 5.56,
  },

  Group: {
    position: "absolute",
    left: 22,
    right: 0,
    top: 153,
    bottom: 5.56,
  },
}));

export function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.HeadBar}>
        <img src={Shape} alt="aqui" className={classes.Logo} />
        <h6 className="Agrotis-Titulo">AGROTIS</h6>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Link to="/">
            <img src={IconBranco} className={classes.IconBranco} alt="" />
          </Link>

          <Link to="/">
            <img src={Home_work} className={classes.HomeWork} alt="" />
          </Link>

          <Link to="/Cadastrar">
            <img src={Group} className={classes.Group} alt="" />
          </Link>
        </div>
      </Drawer>
      <div className="main-content">
        <h5 className="titulo-inicio">Inicio</h5>
        <div className="lista-empresa">
          <Link to="/">
            <img src={HomeIcon} className="lista-empresa-icon" alt="" />
          </Link>
        </div>
        <div className="cadastrar_empresa">
          <Link to="/">
            <img
              src={cadastrar_empresa}
              className="cadastrar_empresa-icon"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
