import React from 'react';
import Recipe from './Recipe'

class RecipeList extends React.Component {
	render() { 
		const weeks = this.props.weeks;
		console.log(weeks);
		const currentWeek = weeks.find( week => week.name === this.props.currentWeek);
		const showRecipes = currentWeek.recipes.map(recipe => {
			console.log(recipe.directions)
			return (
				<Recipe 
					name={recipe.name} 
					directions={recipe.directions}
					ingredients={recipe.ingredients}
				/>
			)
		})

		
		return ( 
			<div id="recipeList">
				<h1>{this.props.currentWeek}</h1>
				{showRecipes}
			</div>
		 );
	}
}
 
export default RecipeList;