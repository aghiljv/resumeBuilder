import React, { useContext } from 'react';
import { Add, Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../App.scss';

import { MainContext } from '../MainContext.js';

function Education() {
	const { education, viewRoute } = useContext(MainContext);
	const [educations, setEducations] = education;
	const [isView, setIsView] = viewRoute;

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
			<b>
				<label className="sectionHeader">Education</label>
			</b>
			<Add onClick={addEducation} />
			{educations.map((education, index) => (
				<div key={index}>
					<div className="buttonDiv row">
						{isView && (
							<Link to="/create" className="navRouterLink" onClick={() => setIsView(false)}>
								<Edit />
							</Link>
						)}
						<Delete onClick={() => removeEducation(index)} />
					</div>
					<div className="row">
						<div className="col-sm-5 halfInput">
							<label htmlFor="instName">Institute Name:</label>
							{!isView && (
								<input
									type="text"
									className="form-control"
									name="instName"
									value={education.instName}
									onChange={(e) => handleEduChange(e, index)}
								></input>
							)}
							{isView && <div>{education.instName}</div>}
						</div>
						<div className="col-sm-5 halfInput">
							<label htmlFor="degree">Degree:</label>
							{!isView && (
								<input
									type="text"
									className="form-control"
									name="degree"
									value={education.degree}
									onChange={(e) => handleEduChange(e, index)}
								></input>
							)}
							{isView && <div>{education.degree}</div>}
						</div>
					</div>
					<div className="row">
						<div className="col-sm-5 halfInput">
							<label htmlFor="major">Major:</label>
							{!isView && (
								<input
									type="text"
									className="form-control"
									name="major"
									value={education.major}
									onChange={(e) => handleEduChange(e, index)}
								></input>
							)}
							{isView && <div>{education.major}</div>}
						</div>
						<div className="col-sm-5 halfInput">
							<label htmlFor="year">Year:</label>
							{!isView && (
								<input
									type="text"
									className="form-control"
									name="year"
									value={education.year}
									onChange={(e) => handleEduChange(e, index)}
								></input>
							)}
							{isView && <div>{education.year}</div>}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Education;
