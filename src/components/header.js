import React from "react";

import SearchBar from "../containers/SearchBar";

const Header = () => (
  <nav className="navbar navbar-light bg-light mb-3">
    <div className="container">
      <a className="navbar-brand">Weather</a>
      <SearchBar />
    </div>
  </nav>
);

export default Header;
