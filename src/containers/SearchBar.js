import React, { Component } from "react";

export default class SearchBar extends Component {
	render() {
		return (
			<form className="form-inline float-left">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Enter a city to search"
					aria-label="Search"
				/>
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
					Search
				</button>
			</form>
		);
	}
}
