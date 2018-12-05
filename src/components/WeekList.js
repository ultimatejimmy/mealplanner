import React from 'react';

class WeekList extends React.Component {
	constructor(props) {
		super()
		this.setCurrentWeek = this.setCurrentWeek.bind(this)
	}
	setCurrentWeek(week) {
		console.log(week);
		this.props.setCurrentWeek(week);
	}
	render() { 
		const weeks = this.props.weeks;
		
		const showWeeks = weeks.map(week => {
			// let weekArr = [];
			// weekArr = [...weekArr, week.name]
			return (
				<li onClick={() => {this.setCurrentWeek(week.name)}} key={week.name}>{week.name}</li>
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