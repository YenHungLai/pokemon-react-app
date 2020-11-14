import React from 'react';
import ReactDOM from 'react-dom';
// Contexts
import { useSnackbarContext } from 'contexts/snackbar';
// Material UI
import MuiSnackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Snackbar = () => {
	const {
		snackbar: { msg, severity },
		setSnackbar,
	} = useSnackbarContext();

	const onClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setSnackbar({ msg: null, severity });
	};

	return ReactDOM.createPortal(
		<MuiSnackbar
			open={!!msg}
			autoHideDuration={3000}
			onClose={onClose}
			anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
		>
			<Alert variant='filled' severity={severity}>
				{msg}
			</Alert>
		</MuiSnackbar>,
		document.querySelector('#root')
	);
};

export default Snackbar;
