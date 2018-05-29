import React from "react";

import ChartContainer from "../containers/ChartContainer";
import Header from "./header";

const App = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<ChartContainer />
			</div>
		</div>
	);
};

export default App;
