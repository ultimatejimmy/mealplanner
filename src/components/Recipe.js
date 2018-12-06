import React from 'react'
import InlineEdit from 'react-edit-inplace';

export default class Recipe extends React.Component {
	constructor(props) {
		super();
		this.state = {
			name: 'Add recipe title',
			directions: "asdfsdfsdfasdf asfasdf asdf "
		}
		this.dataChanged = this.dataChanged.bind(this);
	}
	dataChanged(data) {
        // data = { description: "New validated text comes here" }
        // Update your model from here
        console.log(data)
        this.setState({...data})
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
            />
	   		<h3>Recipe Source</h3>
			<b>Ingredients</b>
		</div>
    )
  }
}
