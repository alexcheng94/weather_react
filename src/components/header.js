import React from "react";
import { connect } from "react-redux";
import SearchBar from "../containers/SearchBar";
import ProgressBar from "./progress";

const Header = props => (
  <div className='mb-4'>
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand d-none d-sm-block">Weather</a>
        <SearchBar />
      </div>
    </nav>
    {/* <ProgressBar /> */}
    {props.isFetching ? <ProgressBar /> : <div style={{ height: "5px" }} />}
  </div>
);

const mapStateToProps = ({ isFetching }) => ({ isFetching });

export default connect(
  mapStateToProps,
  null
)(Header);
