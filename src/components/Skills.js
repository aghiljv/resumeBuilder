import React, { useContext } from 'react';
import '../App.scss';
import { WithContext as ReactTags } from 'react-tag-input';
import { Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { MainContext } from '../MainContext.js';

function Skills() {
	const { suggestionsList, viewRoute } = useContext(MainContext);
	const [suggestions, setSuggetions] = suggestionsList;
	const [isView, setIsView] = viewRoute;

	const { skill } = useContext(MainContext);
	const [skills, setSkills] = skill;

	const KeyCodes = {
		comma: 188,
		enter: 13,
	};
	const delimiters = [KeyCodes.comma, KeyCodes.enter];

	const handleDelete = (index) => {
		skills.splice(index, 1);
		setSkills([...skills]);
	};

	const handleAddition = (skill) => {
		setSkills([...skills, skill]);
	};

	const handleDrag = (skill, currPos, newPos) => {
		const skils = [...skills];
		const newSkills = skils.slice();
		newSkills.splice(currPos, 1);
		newSkills.splice(newPos, 0, skill);
		setSkills([...newSkills]);
	};

	return (
		<div>
			<b>
				<label className="sectionHeader">Skills</label>
			</b>
			<div className="buttonDiv">
				{isView && (
					<Link to="/create" className="navRouterLink" onClick={() => setIsView(false)}>
						<Edit />
					</Link>
				)}
			</div>
			<div className="halfInput">
				{!isView && (
					<ReactTags
						classNames={{
							tags: 'skillHolder',
							tag: 'skillClass',
							tagInput: 'skillInput',
							tagInputField: 'form-control',
						}}
						tags={skills}
						suggestions={suggestions}
						handleDelete={handleDelete}
						handleAddition={handleAddition}
						handleDrag={handleDrag}
						delimiters={delimiters}
						placeholder="Add Skills"
					/>
				)}
				{isView && (
					<ReactTags
						classNames={{
							tags: 'skillHolder',
							tag: 'skillClass',
							tagInput: 'skillInputView',
							tagInputField: 'form-control',
						}}
						tags={skills}
						suggestions={suggestions}
						handleDrag={handleDrag}
						delimiters={delimiters}
						placeholder="Add Skills"
					/>
				)}
			</div>
		</div>
	);
}

export default Skills;
