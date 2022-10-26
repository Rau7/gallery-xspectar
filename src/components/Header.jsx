import React from "react";
import logo from "../images/main_logo.png";

function Header() {
  return (
    <header>
      <a href="/">
        <img src={logo} className="xspectar-logo" alt="xspectar-logo" />
      </a>
    </header>
  );
}

export default Header;
