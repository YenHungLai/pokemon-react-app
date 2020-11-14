import { createContext, useContext, useReducer, useState } from 'react';

const INIT = {
	username: null,
	token: null,
};

const AuthContext = createContext(INIT);

export const AuthProvider = ({ children }) => {
	const [state, setState] = useState(INIT); // Use useReducer for more complex state.

	return <AuthContext.Provider value={{ auth: state, setAuth: setState }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
