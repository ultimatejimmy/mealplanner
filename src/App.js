import React from 'react';
import './App.css';
import WeekList from './components/WeekList';
import ShoppingList from './components/ShoppingList';
import AddWeek from './components/AddWeek';
import SimpleStorage, { clearStorage } from "react-simple-storage";
import RecipeList from './components/RecipeList';

class App extends React.Component {
	constructor(props){
		super();

		this.state = {
			weeks: [],
			currentWeek: ''
		}
		this.createWeek = this.createWeek.bind(this)
		this.setCurrentWeek = this.setCurrentWeek.bind(this)
	}
	setCurrentWeek(week){
		this.setState({
			currentWeek: week
		});
	}
	createWeek(theWeek){
		const week = {
			name: theWeek,
			recipes: [{
				title: "Test 1",
				ingredients: [{
					thing: "water",
					unit: "cup", 
					amount: 1
				}],
				instructions: "Drink up!"
			}]
		}
		this.setState({
			weeks: [week, ...this.state.weeks]
		})
		console.log();
	}
	render() {
		return (
		<div id="app">
			<SimpleStorage parent={this}/>
			<WeekList weeks={this.state.weeks} setCurrentWeek={this.setCurrentWeek}/>
			<AddWeek createWeek={this.createWeek} />
			<RecipeList weeks={this.state.weeks} currentWeek={this.state.currentWeek}/>
			<ShoppingList/>
		</div>
		);
	}
}

export default App;
