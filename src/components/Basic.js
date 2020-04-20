import React, { useContext } from 'react';
import { Edit } from '@material-ui/icons';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import '../App.scss';
import 'react-datepicker/dist/react-datepicker.css';

import { MainContext } from '../MainContext.js';

function Basic() {
	const { basic, viewRoute, dateOB } = useContext(MainContext);
	const [basicInfo, setBasicInfo] = basic;
	const [isView, setIsView] = viewRoute;

	const [dob, setDob] = dateOB;

	const handleChange = (name, value) => {
		setBasicInfo(() => {
			let basicIn = { ...basicInfo, [name]: value };
			return basicIn;
		});
	};

	const handleDob = (date) => {
		const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
		const mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(date);
		const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
		setDob(date);
		handleChange('dob', String(`${mo}/${da}/${ye}`));
	};

	return (
		<div>
			<b>
				<label className="sectionHeader">Basic Information</label>
			</b>
			<div className="buttonDiv">
				{isView && (
					<Link to="/create" className="navRouterLink" onClick={() => setIsView(false)}>
						<Edit />
					</Link>
				)}
			</div>
			<div className="row">
				<div className="col-sm-5 halfInput">
					<label htmlFor="name">Name:</label>
					{!isView && (
						<input
							type="text"
							className="form-control"
							name="name"
							value={basicInfo.name || ''}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
						></input>
					)}
					{isView && <div>{basicInfo.name || ''}</div>}
				</div>
				<div className="col-sm-5 halfInput">
					<label htmlFor="address">Date of Birth:</label>
					{!isView && <DatePicker className="form-control" selected={dob} onChange={handleDob} />}
					{isView && <div>{basicInfo.dob || ''}</div>}
				</div>
			</div>
			<div className="row">
				<div className="col-sm-5 halfInput">
					<label htmlFor="email">Email:</label>
					{!isView && (
						<input
							type="email"
							className="form-control"
							name="email"
							value={basicInfo.email || ''}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
						></input>
					)}
					{isView && <div>{basicInfo.email || ''}</div>}
				</div>
				<div className="col-sm-5 halfInput">
					<label htmlFor="phone">Phone:</label>
					{!isView && (
						<input
							type="text"
							className="form-control"
							name="phone"
							value={basicInfo.phone || ''}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
						></input>
					)}
					{isView && <div>{basicInfo.phone || ''}</div>}
				</div>
			</div>
			<div className="halfInput">
				<label htmlFor="address">Address:</label>
				{!isView && (
					<textarea
						rows="5"
						className="form-control"
						name="address"
						value={basicInfo.address || ''}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					></textarea>
				)}
				{isView && <div>{basicInfo.address || ''}</div>}
			</div>
		</div>
	);
}

export default Basic;
