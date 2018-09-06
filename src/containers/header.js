import React from "react";
import { connect } from "react-redux";
import SearchBar from "../containers/SearchBar";
import ProgressBar from "../components/progress";

const Header = props => (
  <div className="mb-3">
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand d-none d-sm-block">Weather</a>
        <SearchBar />
      </div>
    </nav>
    {props.isFetchingForcast || props.isFetchingCurrent ? (
      <ProgressBar />
    ) : (
      <div style={{ height: "5px" }} />
    )}
  </div>
);

const mapStateToProps = ({ isFetchingForcast, isFetchingCurrent }) => ({
  isFetchingForcast,
  isFetchingCurrent
});

export default connect(
  mapStateToProps,
  null
)(Header);
