import React, { Component } from "react";
import { fetchWeather } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "Shanghai"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.fetchWeather(searchTerm, "metric");
    this.setState({ searchTerm: "" });
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.props.fetchWeather(searchTerm, "metric");
  }

  render() {
    return (
      <form className="form-inline float-left " onSubmit={this.handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter a city to search"
          aria-label="Search"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />

        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchWeather }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
