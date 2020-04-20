import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { MainProvider } from './MainContext.js';

import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import Create from './pages/Create.js';
import View from './pages/View.js';

function App() {
	return (
		<MainProvider>
			<div className="App">
				<Router>
					<Nav />
					<Route path="/" exact component={Home} />
					<Route path="/create" component={Create} />
					<Route path="/view" component={View} />
				</Router>
			</div>
		</MainProvider>
	);
}

export default App;
