import React from 'react';
import '../App.scss';

import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<Link to="/" className="navRouterLink">
				<h3>ResumeBuilder</h3>
			</Link>
			<ul className="navRouter">
				<Link to="/create" className="navRouterLink">
					<li>Create</li>
				</Link>
				<Link to="/edit" className="navRouterLink">
					<li>Edit</li>
				</Link>
				<Link to="/view" className="navRouterLink">
					<li>View</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
