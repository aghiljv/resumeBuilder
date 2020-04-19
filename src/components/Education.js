import React, { useContext } from 'react';
import '../App.scss';

import { MainContext } from '../MainContext.js';

function Education() {
	const { education } = useContext(MainContext);
	const [educations, setEducations] = education;

	const addEducation = () => {
		setEducations([
			...educations,
			{
				instName: '',
				degree: '',
				major: '',
				year: '',
			},
		]);
	};

	const removeEducation = (index) => {
		educations.splice(index, 1);
		setEducations([...educations]);
	};

	const handleEduChange = (e, idx) => {
		let name = e.target.name;
		let value = e.target.value;

		setEducations((educations) => {
			return educations.map((education, index) => {
				if (idx === index) {
					education = { ...education, [name]: value };
				}
				return education;
			});
		});
	};

	return (
		<div>
			{educations.map((education, index) => (
				<div key={index}>
					<button onClick={() => removeEducation(index)} className="btn btn-primary">
						Remove Education
					</button>
					<label htmlFor="instName">Institute Name:</label>
					<input
						type="text"
						className="form-control"
						name="instName"
						value={education.instName}
						onChange={(e) => handleEduChange(e, index)}
					></input>
					<label htmlFor="degree">Degree:</label>
					<input
						type="text"
						className="form-control"
						name="degree"
						value={education.degree}
						onChange={(e) => handleEduChange(e, index)}
					></input>
					<label htmlFor="major">Major:</label>
					<input
						type="text"
						className="form-control"
						name="major"
						value={education.major}
						onChange={(e) => handleEduChange(e, index)}
					></input>
					<label htmlFor="year">Year:</label>
					<input
						type="text"
						className="form-control"
						name="year"
						value={education.year}
						onChange={(e) => handleEduChange(e, index)}
					></input>
				</div>
			))}
			<button onClick={addEducation} className="btn btn-primary">
				Add Education
			</button>
		</div>
	);
}

export default Education;
