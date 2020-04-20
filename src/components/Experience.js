import React, { useContext } from 'react';
import { Add, Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../App.scss';

import { MainContext } from '../MainContext.js';

function Experience() {
	const { experience, viewRoute } = useContext(MainContext);
	const [experiences, setExperiences] = experience;
	const [isView, setIsView] = viewRoute;

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
			<b>
				<label className="sectionHeader">Experience</label>
			</b>
			<Add onClick={addExperience} />
			{experiences.map((experience, index) => (
				<div key={index}>
					<div className="buttonDiv">
						{isView && (
							<Link to="/create" className="navRouterLink" onClick={() => setIsView(false)}>
								<Edit />
							</Link>
						)}
						<Delete onClick={() => removeExperience(index)} />
					</div>
					<div className="row">
						<div className="col-sm-5 halfInput">
							<label htmlFor="compName">Company Name:</label>
							{!isView && (
								<input
									type="text"
									className="form-control"
									name="compName"
									value={experience.compName}
									onChange={(e) => handleExpChange(e, index)}
								></input>
							)}
							{isView && <div>{experience.compName}</div>}
						</div>
						<div className="col-sm-5 halfInput">
							<label htmlFor="designation">Designation:</label>
							{!isView && (
								<input
									type="text"
									className="form-control"
									name="designation"
									value={experience.designation}
									onChange={(e) => handleExpChange(e, index)}
								></input>
							)}
							{isView && <div>{experience.designation}</div>}
						</div>
					</div>
					<div className="row">
						<div className="col-sm-5 halfInput">
							<label htmlFor="startYear">Start Year:</label>
							{!isView && (
								<input
									type="text"
									className="form-control"
									name="startYear"
									value={experience.startYear}
									onChange={(e) => handleExpChange(e, index)}
								></input>
							)}
							{isView && <div>{experience.startYear}</div>}
						</div>
						{!experience.present && (
							<div className="col-sm-5 halfInput">
								<label htmlFor="endYear">End Year:</label>
								{!isView && (
									<input
										type="text"
										className="form-control"
										name="endYear"
										value={experience.endYear}
										onChange={(e) => handleExpChange(e, index)}
									></input>
								)}
								{isView && <div>{experience.endYear}</div>}
							</div>
						)}
					</div>
					<label className="checkBoxHolder">
						{!isView && (
							<input
								type="checkbox"
								name="present"
								value={experience.present}
								checked={experience.present}
								onChange={(e) => handleExpChkChange(e, index)}
							></input>
						)}
						{isView && (
							<input
								type="checkbox"
								name="present"
								value={experience.present}
								checked={experience.present}
								onChange={(e) => handleExpChkChange(e, index)}
								disabled
							></input>
						)}
						&nbsp; Present:
					</label>
				</div>
			))}
		</div>
	);
}

export default Experience;
