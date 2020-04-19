import React, { useState, createContext } from 'react';

export const MainContext = createContext();

export const MainProvider = (props) => {
	const [basicInfo, setBasicInfo] = useState([]);
	const [educations, setEducations] = useState([
		{
			instName: '',
			degree: '',
			major: '',
			year: '',
		},
	]);

	const [experiences, setExperiences] = useState([
		{
			compName: '',
			designation: '',
			startYear: '',
			endYear: '',
			present: true,
		},
	]);
	const [skills, setSkills] = useState([]);

	const [suggestions, setSuggetions] = useState([
		{ id: 'JavaScript', text: 'JavaScript' },
		{ id: 'Java', text: 'Java' },
		{ id: 'ReactJS', text: 'ReactJS' },
		{ id: 'VueJS', text: 'VueJS' },
		{ id: 'AngularJS', text: 'AngularJS' },
		{ id: 'Angular', text: 'Angular' },
		{ id: 'NuxtJS', text: 'NuxtJS' },
		{ id: 'NextJS', text: 'NextJS' },
		{ id: 'SvelteJS', text: 'SvelteJS' },
		{ id: 'MongoDB', text: 'MongoDB' },
		{ id: 'Express', text: 'Express' },
		{ id: 'NodeJS', text: 'NodeJS' },
		{ id: 'Adobe PhotoShop', text: 'Adobe PhotoShop' },
		{ id: 'Adobe XD', text: 'Adobe XD' },
		{ id: 'MySQL', text: 'MySQL' },
		{ id: 'PostgreSQL', text: 'PostgreSQL' },
		{ id: 'Unity3D', text: 'Unity3D' },
	]);

	return (
		<MainContext.Provider
			value={{
				basic: [basicInfo, setBasicInfo],
				education: [educations, setEducations],
				experience: [experiences, setExperiences],
				skill: [skills, setSkills],
				suggestionsList: [suggestions, setSuggetions],
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
};
