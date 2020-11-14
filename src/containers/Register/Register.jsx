import React, { useEffect, useState, useRef } from 'react';
// Apollo
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from 'graphql.js';
// Material UI
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// Contexts
import { useSnackbarContext } from 'contexts/snackbar';
// Hooks
import useForm from 'hooks/useForm';
import useMounted from 'hooks/useMounted';

import styles from './Register.module.css';

const ERRORS_INIT = {
	username: false,
	password: false,
	confirmPassword: false,
};

const Register = ({ history, ...props }) => {
	const [form, onInput] = useForm();
	const [formErrors, setErrors] = useState(ERRORS_INIT);
	const mounted = useMounted();
	const { setSnackbar } = useSnackbarContext();
	const [registerUser, { loading, error }] = useMutation(REGISTER_USER);

	useEffect(() => {
		// This will run after initial render, before user enters anything.
		const id = setTimeout(() => {
			setErrors(ERRORS_INIT);
		}, 3000);
		return () => clearTimeout(id);
	}, [formErrors]);

	const onClick = async () => {
		if (form.confirmPassword !== form.password) {
			setErrors({ ...formErrors, confirmPassword: true });
			return setSnackbar({ msg: 'Confirm password does not equal to password', severity: 'error' });
		}

		try {
			const user = await registerUser({
				variables: { username: form.username, password: form.password, confirmPassword: form.confirmPassword },
			});
			console.log(user);
			history.push('/login');
			setSnackbar({ msg: 'You have registered a user', severity: 'success' });
		} catch (error) {
			setSnackbar({ msg: error.message, severity: 'error' });
		}
	};

	return (
		<Paper elevation={3} className={styles.root}>
			<Typography variant='h5' gutterBottom align='center'>
				Please register
			</Typography>
			<form className={styles.form} onInput={onInput}>
				<TextField className={styles.input} required label='username' name='username' error={formErrors.username} />
				<TextField
					className={styles.input}
					required
					label='password'
					name='password'
					inputProps={{ type: 'password' }}
					error={formErrors.password}
				/>
				<TextField
					className={styles.input}
					required
					label='confirm password'
					name='confirmPassword'
					inputProps={{ type: 'password' }}
					error={formErrors.confirmPassword}
				/>
				{loading ? (
					<CircularProgress className={styles.loading} />
				) : (
					<Button variant='contained' color='primary' className={styles.button} onClick={onClick}>
						register
					</Button>
				)}
			</form>
		</Paper>
	);
};

export default Register;
