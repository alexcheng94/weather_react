import React, { Component } from "react";


import ChartContainer from "../containers/ChartContainer";
import Header from "./header";

class App extends Component {


	render() {
		return (
			<div>
				<Header />

				<div className="container">
					<ChartContainer />
				</div>
			</div>
		);
	}
}

export default App;
