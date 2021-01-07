import { createContext, useContext, useEffect, useState } from 'react';

const INIT = {
	username: null,
	token: null,
	reference: null,
};

const AuthContext = createContext(JSON.parse(localStorage.getItem('authContext')) ?? INIT);

export const AuthProvider = ({ children }) => {
	const [state, setState] = useState(JSON.parse(localStorage.getItem('authContext')) ?? INIT);

	useEffect(() => {
		localStorage.setItem('authContext', JSON.stringify(state));
	}, [state]);

	console.log('Auth context', state);

	return <AuthContext.Provider value={{ auth: state, setAuth: setState }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
