import React, { useContext } from 'react';
import '../App.scss';
import { WithContext as ReactTags } from 'react-tag-input';

import { MainContext } from '../MainContext.js';

function Skills() {
	//temptest start
	const { suggestionsList } = useContext(MainContext);
	const [suggestions, setSuggetions] = suggestionsList;

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
	//temptest end

	return (
		<div>
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
		</div>
	);
}

export default Skills;
