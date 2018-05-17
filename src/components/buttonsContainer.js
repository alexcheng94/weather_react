import React, { Component } from "react";

class ButtonsContainer extends Component {
	renderButtons(buttonName) {
		return (
			<button key={buttonName} type="button" className="btn btn-primary">
				{buttonName}
			</button>
		);
	}

	render() {
		
		const buttonGroupclassName = "btn-group btn-group-sm";
		const buttonsLeft = ["temperature", "humidity", "precipitation"];
		const buttonsRight = ["F\xB0", "C\xB0"];

		return (
			<div
				className="btn-toolbar justify-content-between pb-4 mx-5 "
				role="toolbar"
			>
				<div className={buttonGroupclassName} role="group">
					{buttonsLeft.map(this.renderButtons)}
				</div>

				<div className={buttonGroupclassName} role="group">
					{buttonsRight.map(this.renderButtons)}
				</div>
			</div>
		);
	}
}

export default ButtonsContainer;
