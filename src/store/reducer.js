export const initialState = {
	movies: [{ id: 1, name: 'blablablah', status: 1 }]
};

export const reducer = (state, action) => {
	const newState = { ...state };

	switch (action.type) {
		case 'ADD_MOVIE':
			newState.movies.push(action.movie);
			break;
		case 'DELETE_MOVIE':
			newState.movies = newState.movies.filter(movie => movie.id !== action.id);
			break;
		default:
			break;
	}

	return newState;
};
