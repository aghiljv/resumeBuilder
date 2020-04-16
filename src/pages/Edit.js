import React from 'react';
import { useState } from 'react';
import '../App.scss';

function Edit() {
	const [educations, setEducations] = useState([
		{
			instName: '',
			degree: '',
			major: '',
			year: '',
		},
	]);

	const addEducation = () => {
		setEducations([...educations, '']);
	};

	const [experiences, setExperiences] = useState([
		{
			compName: '',
			startYear: '',
			endYear: '',
			present: null,
		},
	]);

	const addExperience = () => {
		setExperiences([...experiences, '']);
	};

	const saveDetails = () => {};
	return (
		<div className="mainPage">
			<h1>Edit Resume</h1>
			<div className="form-group">
				<label htmlFor="name">Name:</label>
				<input type="text" className="form-control" id="name"></input>
				<label htmlFor="email">Email:</label>
				<input type="email" className="form-control" id="email"></input>
				<label htmlFor="address">Address:</label>
				<input type="text" className="form-control" id="address"></input>
				<label htmlFor="phone">Phone:</label>
				<input type="text" className="form-control" id="phone"></input>

				<br />
				<b>
					<label htmlFor="education">Education:</label>
				</b>
				{educations.map((education, index) => (
					<div key={index}>
						<label htmlFor="instName">Institute Name:</label>
						<input type="text" className="form-control" id="instName"></input>
						<label htmlFor="degree">Institute Name:</label>
						<input type="text" className="form-control" id="degree"></input>
						<label htmlFor="major">Institute Name:</label>
						<input type="text" className="form-control" id="major"></input>
						<label htmlFor="year">Year:</label>
						<input type="text" className="form-control" id="year"></input>
					</div>
				))}
				<button onClick={addEducation} className="btn btn-primary">
					Add Education
				</button>

				<br />
				<b>
					<label htmlFor="experience">Experience:</label>
				</b>
				{experiences.map((experience, index) => (
					<div key={index}>
						<label htmlFor="compName">Company Name:</label>
						<input type="text" className="form-control" id="compName"></input>
						<label htmlFor="startYear">Start Year:</label>
						<input type="text" className="form-control" id="startYear"></input>
						<label htmlFor="endYear">End Year:</label>
						<input type="text" className="form-control" id="endYear"></input>
						<label htmlFor="present">
							<input type="checkbox" id="present"></input> &nbsp; Present:
						</label>
					</div>
				))}
				<button onClick={addExperience} className="btn btn-primary">
					Add Experience
				</button>

				<br />
				<label htmlFor="skillCollection">Skills:</label>
				<textarea className="form-control" rows="5" id="skillCollection"></textarea>

				<button onClick={saveDetails} className="btn btn-primary">
					Save
				</button>
			</div>
		</div>
	);
}

export default Edit;
