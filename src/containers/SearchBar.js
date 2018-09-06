import React, { Component } from "react";
import { fetchForecast, fetchCurrent } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "Enter a city 🌝🌏🌦"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFoucus = this.handleFoucus.bind(this);
  }
  handleFoucus() {
    this.setState({ searchTerm: "" });
  }
  handleInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm && searchTerm !== "Enter a city 🌝🌏🌦") {
      this.props.fetchCurrent(searchTerm);
      this.props.fetchForecast(searchTerm);
    }
    this.setState({ searchTerm: "" });
  }

  componentDidMount() {
    //Fetch weather based on geolocation on first boot
    navigator.geolocation.getCurrentPosition(
      position => {
        const {
          coords: { latitude, longitude }
        } = position;
        this.props.fetchCurrent(latitude, longitude);
        this.props.fetchForecast(latitude, longitude);
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <form
        className="input-group col-lg-4 col-sm-8 col-xs-12"
        onSubmit={this.handleSubmit}
      >
        <input
          type="search"
          className="form-control"
          value={this.state.searchTerm}
          aria-label="Enter a city to search"
          aria-describedby="button-addon2"
          onChange={this.handleInputChange}
          onFocus={this.handleFoucus}
        />
        <div className="input-group-append">
          <button className="btn search-btn" type="submit" id="button-addon2">
            Search
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchForecast, fetchCurrent }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
