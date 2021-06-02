import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import SideBar from "./components/SideBar/sidebar";
import Header from "./components/Header/header";

function App() {
  return (
    <BrowserRouter>
      <div className="tudo">
        <SideBar />
        <div className="content">
          <Header />
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
