import React from 'react';
import '../App.scss';

import Basic from '../components/Basic.js';
import Education from '../components/Education.js';
import Experience from '../components/Experience.js';
import Skills from '../components/Skills.js';

function Edit() {
	const saveDetails = () => {};
	return (
		<div className="mainPage">
			<h1>Edit Resume</h1>
			<div className="form-group">
				<Basic />
				<br />
				<b>
					<label htmlFor="education">Education:</label>
				</b>
				<Education />
				<br />
				<b>
					<label htmlFor="experience">Experience:</label>
				</b>
				<Experience />
				<br />
				<Skills />
				<button onClick={saveDetails} className="btn btn-primary">
					Save
				</button>
			</div>
		</div>
	);
}

export default Edit;
