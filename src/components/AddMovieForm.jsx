import React, { useContext, useState } from 'react';
import context from '../store';

export default () => {
	const [name, setName] = useState('');
	const [, dispatch] = useContext(context);

	const handleChange = event => {
		const { value } = event.target;

		setName(value);
	};

	const handeSubmit = event => {
		event.preventDefault();

		dispatch({
			type: 'ADD_MOVIE',
			movie: {
				id: btoa(Date.now()),
				name,
				status: 0
			}
		});
	};

	return (
		<form onSubmit={handeSubmit}>
			<div>
				<label htmlFor="name">Movie Name</label>
				<input
					name="name"
					id="name"
					type="text"
					value={name}
					onChange={handleChange}
					required={true}
				/>
			</div>
			<div className="text-right">
				<button className="btn-success">
					<i className="fa fa-check"></i> Add
				</button>
			</div>
		</form>
	);
};
