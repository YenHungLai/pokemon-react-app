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
			// Add new balls to current ball counts.
			Object.keys(payload).forEach((ball) => (newState.bag[ball] = newState.bag[ball] + payload[ball]));
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
