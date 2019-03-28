import React from "react";
import Recipe from "./Recipe";

class RecipeList extends React.Component {
	render() {
		const weeks = this.props.weeks;
		// console.log(weeks);
		let currentWeek = weeks.find(
			week => week.name === this.props.currentWeek
		);
		currentWeek = { ...currentWeek };
		let currentRecipes = [currentWeek.recipes];
		// currentRecipes = [...currentRecipes];
		// console.log(currentRecipes);
		const showRecipes = currentRecipes.map((recipe, index) => {
			recipe = { ...recipe };
			return (
				<Recipe
					key={recipe.index}
					name={recipe.name}
					directions={recipe.directions}
					ingredients={recipe.ingredients}
				/>
			);
		});

		return (
			<div id="recipeList">
				<h1>{this.props.currentWeek}</h1>
				{showRecipes}
			</div>
		);
	}
}

export default RecipeList;
