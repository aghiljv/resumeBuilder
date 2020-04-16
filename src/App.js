import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import Create from './pages/Create.js';
import Edit from './pages/Edit.js';
import View from './pages/View.js';

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Route path="/" exact component={Home} />
				<Route path="/create" component={Create} />
				<Route path="/edit" component={Edit} />
				<Route path="/view" component={View} />
			</Router>
		</div>
	);
}

export default App;
