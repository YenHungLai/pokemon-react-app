import { createContext, useContext, useEffect, useReducer, useState } from 'react';
// Apollo
import { useQuery } from '@apollo/client';
import { GET_USER } from 'graphql.js';

import { db } from 'config/firebase.js';
import { useAuthContext } from './auth';

const INIT = {
	bag: {
		pokeball: 0,
		superball: 0,
		ultraball: 0,
	},
	captured: [],
};

const UserContext = createContext(JSON.parse(localStorage.getItem('userContext')) ?? INIT);

function reducer(state, { type, payload }) {
	const newState = Object.assign({}, state);

	switch (type) {
		case 'BUY_BALL':
			newState.bag[payload.type] = newState.bag[payload.type] + payload.amount;
			return newState;
		case 'USE_BALL':
			newState.bag[payload] = newState.bag[payload] - 1;
			return newState;
		case 'CAPTURE_POKEMON':
			if (!newState.captured.includes(payload)) newState.captured = [...newState.captured, payload];
			return newState;
		default:
			return state;
	}
}

export const UserProvider = ({ children }) => {
	// TODO: read from DB and cache in localStorage.
	const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('userContext')) ?? INIT);
	const { auth } = useAuthContext();

	console.log('auth', auth);

	useEffect(() => {
		(async function () {
			try {
				if (auth.reference) {
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	useEffect(() => {
		localStorage.setItem('userContext', JSON.stringify(state));
		(async function () {
			try {
				if (auth.reference) await db.doc(auth.reference).update(state);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [state]);

	console.log('User context', state);

	return <UserContext.Provider value={{ user: state, userDispatch: dispatch }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
