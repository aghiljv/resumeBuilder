import React, { useContext } from 'react';
import '../App.scss';

import { MainContext } from '../MainContext.js';

function Basic() {
	const { basic } = useContext(MainContext);
	const [basicInfo, setBasicInfo] = basic;

	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		setBasicInfo(() => {
			let basicIn = { ...basicInfo, [name]: value };
			return basicIn;
		});
	};

	return (
		<div>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				className="form-control"
				name="name"
				value={basicInfo.name || ''}
				onChange={(e) => handleChange(e)}
			></input>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				className="form-control"
				name="email"
				value={basicInfo.email || ''}
				onChange={(e) => handleChange(e)}
			></input>
			<label htmlFor="address">Address:</label>
			<input
				type="text"
				className="form-control"
				name="address"
				value={basicInfo.address || ''}
				onChange={(e) => handleChange(e)}
			></input>
			<label htmlFor="phone">Phone:</label>
			<input
				type="text"
				className="form-control"
				name="phone"
				value={basicInfo.phone || ''}
				onChange={(e) => handleChange(e)}
			></input>
		</div>
	);
}

export default Basic;
