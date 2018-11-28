import React from 'react';
import './App.css';
import WeekList from './components/WeekList';
import ShoppingList from './components/ShoppingList';

class App extends React.Component {
  render() {
    return (
	<div id="app">
		<WeekList/>
		<ShoppingList/>
	</div>
    );
  }
}

export default App;
