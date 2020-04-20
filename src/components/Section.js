import React, { useContext } from 'react';
import '../App.scss';

import { MainContext } from '../MainContext.js';

function Section() {
	const { baSection, edSection, exSection, skSection } = useContext(MainContext);
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
	return (
		<div>
			<div className="row">
				<div className="col-sm-5 indSection" onClick={() => setActiveSection('basic')}>
					<img src={require('../images/basic.png')} className="iconStyle" alt="basic" />
				</div>
				<div className="col-sm-5 indSection" onClick={() => setActiveSection('education')}>
					<img src={require('../images/education.png')} className="iconStyle" alt="education" />
				</div>
			</div>
			<div className="row">
				<div className="col-sm-5 indSection" onClick={() => setActiveSection('experience')}>
					<img src={require('../images/experience.png')} className="iconStyle" alt="experience" />
				</div>
				<div className="col-sm-5 indSection" onClick={() => setActiveSection('skills')}>
					<img src={require('../images/skill.png')} className="iconStyle" alt="skills" />
				</div>
			</div>
		</div>
	);
}

export default Section;
