import React from "react";
import InlineEdit from "react-edit-inplace";

export default class Recipe extends React.Component {
	constructor(props) {
		super();
		this.state = {
			name: "Add recipe title",
			directions: "Add recipe directions here.",
			source: "Add recipe source URL"
		};
		this.dataChanged = this.dataChanged.bind(this);
	}
	dataChanged(data) {
		// data = { description: "New validated text comes here" }
		// Update your model from here
		console.log(data);
		this.setState({ ...data });
	}
	render() {
		return (
			<div className="recipe">
				<InlineEdit
					text={this.state.name}
					paramName="name"
					change={this.dataChanged}
					staticElement="h2"
				/>
				<InlineEdit
					text={this.state.directions}
					paramName="directions"
					change={this.dataChanged}
					staticElement="p"
					editingElement="textarea"
					editing="true"
				/>
				<h3>Recipe Source</h3>
				<InlineEdit
					text={this.state.source}
					paramName="source"
					change={this.dataChanged}
					staticElement="p"
				/>
				<h3>Ingredients</h3>
			</div>
		);
	}
}
