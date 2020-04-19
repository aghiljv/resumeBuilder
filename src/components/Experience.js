import React, { useContext } from 'react';
import '../App.scss';

import { MainContext } from '../MainContext.js';

function Experience() {
	const { experience } = useContext(MainContext);
	const [experiences, setExperiences] = experience;

	const addExperience = () => {
		setExperiences([
			...experiences,
			{
				compName: '',
				designation: '',
				startYear: '',
				endYear: '',
				present: false,
			},
		]);
	};

	const removeExperience = (index) => {
		experiences.splice(index, 1);
		setExperiences([...experiences]);
	};

	const handleExpChange = (e, idx) => {
		let name = e.target.name;
		let value = e.target.value;

		setExperiences((experiences) => {
			return experiences.map((experience, index) => {
				if (idx === index) {
					experience = { ...experience, [name]: value };
				}
				return experience;
			});
		});
	};
	const handleExpChkChange = (e, idx) => {
		let name = e.target.name;
		let value = e.target.checked;

		setExperiences((experiences) => {
			return experiences.map((experience, index) => {
				if (idx === index) {
					experience = { ...experience, [name]: value };
				}
				return experience;
			});
		});
	};

	return (
		<div>
			{experiences.map((experience, index) => (
				<div key={index}>
					<button onClick={() => removeExperience(index)} className="btn btn-primary">
						Remove Experience
					</button>
					<label htmlFor="compName">Company Name:</label>
					<input
						type="text"
						className="form-control"
						name="compName"
						value={experience.compName}
						onChange={(e) => handleExpChange(e, index)}
					></input>
					<label htmlFor="designation">Designation:</label>
					<input
						type="text"
						className="form-control"
						name="designation"
						value={experience.designation}
						onChange={(e) => handleExpChange(e, index)}
					></input>
					<label htmlFor="startYear">Start Year:</label>
					<input
						type="text"
						className="form-control"
						name="startYear"
						value={experience.startYear}
						onChange={(e) => handleExpChange(e, index)}
					></input>
					<label htmlFor="endYear">End Year:</label>
					{!experience.present && (
						<input
							type="text"
							className="form-control"
							name="endYear"
							value={experience.endYear}
							onChange={(e) => handleExpChange(e, index)}
						></input>
					)}
					<label htmlFor="present">
						<input
							type="checkbox"
							name="present"
							value={experience.present}
							checked={experience.present}
							onChange={(e) => handleExpChkChange(e, index)}
						></input>{' '}
						&nbsp; Present:
					</label>
				</div>
			))}
			<button onClick={addExperience} className="btn btn-primary">
				Add Experience
			</button>
		</div>
	);
}

export default Experience;
