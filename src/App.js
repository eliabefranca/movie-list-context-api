import React, { useReducer } from 'react';

import Header from './components/Header';
import MovieList from './components/MovieList';

// store
import { Provider } from './store';
import { initialState, reducer } from './store/reducer';

import './style.css';
import AddMovieForm from './components/AddMovieForm';

function App() {
	const state = useReducer(reducer, initialState);

	return (
		<Provider value={state}>
			<div className="App">
				<Header />
				<MovieList />
				<AddMovieForm />
			</div>
		</Provider>
	);
}

export default App;
