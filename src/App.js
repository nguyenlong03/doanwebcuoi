import React from "react";

import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import { Outlet } from "react-router";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <img
        className="banner-img"
        src="https://salt.tikicdn.com/cache/w500/ts/tmp/24/b8/61/632e5eb432e0277b7897d58a56dbb310.jpg"
        alt=""
      />
      <div className="header">
        <Header />
      </div>
      <div className="app_content">
        <Outlet />
      </div>
      <div className="app_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
