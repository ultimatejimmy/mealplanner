import React from "react";

class AddRecipe extends React.Component {
	constructor(props) {
		super();
		this.state = {
			recipeTitle: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({
			weekName: event.target.value
		});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.createRecipe(this.state.recipeTitle);
	}
	render() {
		return (
			<div id="addRecipe">
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						value={this.state.recipeTitle}
						placeholder="Add a new recipe"
						required
					/>
					<button type="submit">+</button>
				</form>
			</div>
		);
	}
}

export default AddRecipe;
