import { createContext, useContext, useReducer, useState } from 'react';

const INIT = {
	bag: {
		pokeball: 0,
		superball: 0,
		ultraball: 0,
	},
	captured: [],
};

const UserContext = createContext(INIT);

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
			newState.captured = [...newState.captured, payload];
			return newState;
		default:
			return state;
	}
}

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT);

	console.log('User context', state);

	return <UserContext.Provider value={{ user: state, dispatch }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
