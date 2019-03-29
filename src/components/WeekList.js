import React from "react";
import { getQueryVariable } from "../utility";

class WeekList extends React.Component {
	constructor(props) {
		super();
		this.state = {
			currentWeek: getQueryVariable("week")
		};
		this.setCurrentWeek = this.setCurrentWeek.bind(this);
	}
	setCurrentWeek(week, index) {
		this.setState({
			currentWeek: index
		});
		this.props.setCurrentWeek(week);
	}
	render() {
		const weeks = this.props.weeks;

		const showWeeks = weeks.map((week, index) => {
			return (
				<li key={week.name}>
					<a href={"?week=" + week.name}>{week.name}</a>
				</li>
			);
		});
		return (
			<div id="weekList">
				<ul>{showWeeks}</ul>
			</div>
		);
	}
}

export default WeekList;
