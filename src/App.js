import React from "react";
import "./App.css";
import WeekList from "./components/WeekList";
import ShoppingList from "./components/ShoppingList";
import AddWeek from "./components/AddWeek";
import AddRecipe from "./components/AddRecipe";
import SimpleStorage from "react-simple-storage";
import RecipeList from "./components/RecipeList";

class App extends React.Component {
	constructor(props) {
		super();

		this.state = {
			weeks: [],
			recipes: [],
			ingredients: []
		};
		this.createWeek = this.createWeek.bind(this);
		// this.createRecipe = this.createRecipe.bind(this);
		this.setCurrentWeek = this.setCurrentWeek.bind(this);
	}
	setCurrentWeek(week) {
		this.setState({
			currentWeek: week
		});
	}
	createWeek(theWeek) {
		const week = {
			name: theWeek
		};
		this.setState({
			weeks: [week, ...this.state.weeks]
		});
		console.log();
	}
	render() {
		return (
			<div id="app">
				<SimpleStorage parent={this} />
				<WeekList
					weeks={this.state.weeks}
					setCurrentWeek={this.setCurrentWeek}
				/>
				<AddWeek createWeek={this.createWeek} />
				<RecipeList
					weeks={this.state.weeks}
					currentWeek={this.state.currentWeek}
				/>
				<AddRecipe />
				<ShoppingList />
			</div>
		);
	}
}

export default App;
