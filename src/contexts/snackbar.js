import { createContext, useContext, useReducer, useState } from 'react';

const INIT = {
	msg: null,
	severity: 'info',
};

const SnackbarContext = createContext(INIT);

export const SnackbarProvider = ({ children }) => {
	const [state, setState] = useState(INIT); // Use useReducer for more complex state.

	console.log('Snackbar context', state);

	return (
		<SnackbarContext.Provider value={{ snackbar: state, setSnackbar: setState }}>{children}</SnackbarContext.Provider>
	);
};

export const useSnackbarContext = () => useContext(SnackbarContext);
