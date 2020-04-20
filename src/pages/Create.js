import React, { useContext } from 'react';
import '../App.scss';

import Section from '../components/Section.js';
import Basic from '../components/Basic.js';
import Education from '../components/Education.js';
import Experience from '../components/Experience.js';
import Skills from '../components/Skills.js';

import { useHistory } from 'react-router-dom';
import { MainContext } from '../MainContext.js';

function Create() {
	const {
		baSection,
		edSection,
		exSection,
		skSection,
		createState,
		viewRoute,
		basic,
		education,
		experience,
		skill,
	} = useContext(MainContext);
	const [created, setCreated] = createState;
	const [isView, setIsView] = viewRoute;
	const [basicInfo, setBasicInfo] = basic;
	const [educations, setEducations] = education;
	const [experiences, setExperiences] = experience;
	const [skills, setSkills] = skill;

	const history = useHistory();

	const [ba, setba] = baSection;
	const [ed, seted] = edSection;
	const [ex, setex] = exSection;
	const [sk, setsk] = skSection;

	const setActiveSection = (section) => {
		setba(section === 'basic' ? true : false);
		seted(section === 'education' ? true : false);
		setex(section === 'experience' ? true : false);
		setsk(section === 'skills' ? true : false);
	};

	const nextSection = () => {
		if (ba === true && validateBasicEntries()) {
			setActiveSection('education');
		} else if (ed === true && validateeduEntries()) {
			setActiveSection('experience');
		} else if (ex === true && validateexpEntries()) {
			setActiveSection('skills');
		}
	};

	const validateBasicEntries = () => {
		if (
			basicInfo.name !== '' &&
			basicInfo.dob !== undefined &&
			basicInfo.email !== '' &&
			basicInfo.phone !== '' &&
			basicInfo.address !== ''
		) {
			return validateEmail();
		} else {
			alert('Some details are not entered in Basic Information');
			return false;
		}
	};

	const validateEmail = () => {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(basicInfo.email)) {
			return true;
		}
		alert('You have entered an invalid email address!');
		return false;
	};
	const validateeduEntries = () => {
		var returnBool = true;
		educations.forEach((education) => {
			console.log(education);
			if (
				education.instName !== '' &&
				education.degree !== '' &&
				education.major !== '' &&
				education.year !== ''
			) {
				if (isNaN(education.year)) {
					alert('Year in Education is supposed to be a number');
					returnBool = false;
				}
			} else {
				alert('Some details are not entered in Education');
				returnBool = false;
			}
		});
		return returnBool;
	};

	const validateexpEntries = () => {
		var returnBool = true;
		experiences.forEach((experience) => {
			console.log(experience);
			if (
				experience.compName !== '' &&
				experience.designation !== '' &&
				experience.startYear !== '' &&
				experience.present === true
			) {
				if (isNaN(experience.startYear)) {
					console.log('first');
					alert('Year in Experience is supposed to be a number');
					returnBool = false;
				}
			} else if (
				experience.compName !== '' &&
				experience.designation !== '' &&
				experience.startYear !== '' &&
				experience.endYear !== '' &&
				experience.present === false
			) {
				if (isNaN(experience.startYear) && isNaN(experience.endYear)) {
					console.log('second');
					alert('Year in Experience is supposed to be a number');
					returnBool = false;
				}
			} else {
				alert('Some details are not entered in Experience');
				returnBool = false;
			}
		});
		return returnBool;
	};

	const validateSkills = () => {
		console.log(skills.length);
		if (validateBasicEntries() && validateeduEntries() && validateexpEntries()) {
			if (skills.length > 2) return true;
		} else if (skills.length < 3) {
			alert('Add atleast 3 skills');
			return false;
		}
	};

	const saveDetails = () => {
		if (validateSkills()) {
			setCreated(true);
			setIsView(true);
			history.push('/view');
			setActiveSection('basic');
		}
	};

	return (
		<div className="mainPage">
			<h1>Create Resume</h1>
			<div className="row">
				<div className="col-sm-2 sectionHolder">
					<Section />
				</div>
				<div className="form-group col-sm-6 sectionContent overflow-auto">
					{ba && <Basic />}
					{ed && <Education />}
					{ex && <Experience />}
					{sk && <Skills />}
					{!sk && (
						<div className="buttonDiv">
							<button onClick={nextSection} className="btn btn-primary">
								Next >
							</button>
						</div>
					)}
					{sk && (
						<div className="buttonDiv">
							{/* <Link to="/view"> */}
							<button onClick={saveDetails} className="btn btn-primary">
								Save
							</button>
							{/* </Link> */}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Create;
