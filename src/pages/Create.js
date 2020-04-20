import React, { useContext } from 'react';
import '../App.scss';

import Section from '../components/Section.js';
import Basic from '../components/Basic.js';
import Education from '../components/Education.js';
import Experience from '../components/Experience.js';
import Skills from '../components/Skills.js';

import { Link } from 'react-router-dom';
import { MainContext } from '../MainContext.js';

function Create() {
	const { baSection, edSection, exSection, skSection, createState, viewRoute } = useContext(MainContext);
	const [created, setCreated] = createState;
	const [isView, setIsView] = viewRoute;

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
		if (ba === true) {
			setActiveSection('education');
		} else if (ed === true) {
			setActiveSection('experience');
		} else if (ex === true) {
			setActiveSection('skills');
		}
	};

	const saveDetails = () => {
		setCreated(true);
		setIsView(true);
		setActiveSection('basic');
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
							<Link to="/view">
								<button onClick={saveDetails} className="btn btn-primary">
									Save
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Create;
