import React from 'react';

class WeekList extends React.Component {
	constructor(props) {
		super()
		this.state = {
			currentItem:''
		}
		this.setCurrentWeek = this.setCurrentWeek.bind(this)
	}
	setCurrentWeek(week, index) {
		this.setState({
			currentItem: index
		})
		this.props.setCurrentWeek(week);
	}
	render() { 
		const weeks = this.props.weeks;
		
		const showWeeks = weeks.map((week, index) => {
			return (
				<li 
					onClick={() => {
						this.setCurrentWeek(week.name, index);
					}} 
					className={ this.state.currentItem === index ? 'active' : ''}
					key={week.name}
				>
					{week.name}
				</li>
			)
		});
        return ( 
            <div id="weekList">
                <ul>
					{showWeeks}
				</ul>
            </div>
         );
    }
}

export default WeekList;