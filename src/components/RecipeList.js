import React from 'react';

class RecipeList extends React.Component {
	render() { 
		return ( 
			<div id="recipeList">
				<h1>{this.props.currentWeek}</h1>
			</div>
		 );
	}
}
 
export default RecipeList;