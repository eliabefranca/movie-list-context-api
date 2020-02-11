import React, { useContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import context from '../store';

export default () => {
	const [{ movies }, dispatch] = useContext(context);

	const deleteMovie = id =>
		dispatch({
			type: 'DELETE_MOVIE',
			id
		});

	return (
		<>
			<ul className="movie-list">
				{movies.map(movie => (
					<li key={movie.id}>
						<span>{movie.name}</span>
						<button className="btn-error" onClick={() => deleteMovie(movie.id)}>
							<i className="fa fa-trash"></i>
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
