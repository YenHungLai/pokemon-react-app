import React, { useRef } from 'react';
// Apollo
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from 'graphql.js';
// Material UI
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Contexts
import { useSnackbarContext } from 'contexts/snackbar';
import { useAuthContext } from 'contexts/auth';
// Hooks
import useForm from 'hooks/useForm';

import styles from './Login.module.css';

const Login = () => {
	const [form, onInput] = useForm();
	const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
	const { setSnackbar } = useSnackbarContext();
	const { setAuth } = useAuthContext();

	const onClick = async () => {
		try {
			const {
				data: { loginUser: user },
			} = await loginUser({
				variables: { username: form.username, password: form.password },
			});
			setAuth({ username: user.username, token: user.token });
			setSnackbar({ msg: 'You have logged in', severity: 'success' });
		} catch (error) {
			setSnackbar({ msg: error.message, severity: 'error' });
		}
	};

	return (
		<Paper elevation={3} className={styles.root}>
			<Typography variant='h5' gutterBottom align='center'>
				Welcome to Pokemon App
			</Typography>
			<form className={styles.form} onInput={onInput}>
				<TextField className={styles.input} required label='username' name='username' />
				<TextField className={styles.input} required label='password' name='password' />
				{loading ? (
					<CircularProgress className={styles.loading} />
				) : (
					<Button variant='contained' color='primary' className={styles.button} onClick={onClick}>
						login
					</Button>
				)}
			</form>
		</Paper>
	);
};

export default Login;
