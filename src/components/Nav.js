import React, { useContext } from 'react';
import '../App.scss';

import { Link } from 'react-router-dom';

import { MainContext } from '../MainContext.js';

function Nav() {
	const { viewRoute, createState } = useContext(MainContext);
	const [isView, setIsView] = viewRoute;
	const [created, setCreated] = createState;

	return (
		<nav>
			<Link to="/" className="navRouterLink" onClick={() => setIsView(false)}>
				<h3>ResumeBuilder</h3>
			</Link>
			<ul className="navRouter">
				<Link to="/create" className="navRouterLink" onClick={() => setIsView(false)}>
					<li>Create/Edit</li>
				</Link>
				{created && (
					<Link to="/view" className="navRouterLink" onClick={() => setIsView(true)}>
						<li>View</li>
					</Link>
				)}
			</ul>
		</nav>
	);
}

export default Nav;
