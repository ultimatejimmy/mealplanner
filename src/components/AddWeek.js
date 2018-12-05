import React from 'react';

class AddWeek extends React.Component {
	constructor(props) {
		super();
		this.state = {
			weekName: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(event){
		this.setState({
			weekName: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		this.props.createWeek(this.state.weekName);
		this.setState({
			weekName: ''
		})
	}
    render() { 
        return ( 
            <div id="addWeek">
                <form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						value={this.state.weekName}
						placeholder="Add a week"
						required
					/>
					<button type="submit">+</button>
			 </form>
            </div>
        );
    }
}

export default AddWeek;