import React, { Component } from "react";
import { fetchWeather } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
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
    this.props.fetchWeather(searchTerm);
    this.setState({ searchTerm: "" });
  }

  componentDidMount() {
    //Fetch weather based on geolocation on first boot    
    navigator.geolocation.getCurrentPosition(position=>{
      const { coords: { latitude, longitude}} = position;
      this.props.fetchWeather(latitude,longitude);
    }, (err)=>{console.log(err);
    });
  }

  render() {
    return (
      <form className="input-group col-lg-4 col-sm-8 col-xs-12" onSubmit={this.handleSubmit}>
        <input
          type="search"
          className="form-control"
          placeholder="Enter a city to search"
          aria-label="Enter a city to search"
          aria-describedby="button-addon2"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-success" type="button" id="button-addon2">Search</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {fetchWeather},
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);

