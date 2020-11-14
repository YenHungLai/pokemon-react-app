import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './Navigation.module.css';

const Navigation = () => {
	const [title, setTitle] = useState('Pokemons');
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setTitle('Pokemons');
				break;
			case '/shop':
				setTitle('Shop');
				break;
			default:
				setTitle('Pokemons');
		}
	}, [location.pathname]);

	return (
		<AppBar position='static'>
			<Toolbar className={styles.toolbar}>
				<Typography className={styles.title} variant='h6'>
					{title}
				</Typography>
				<Button className={styles.logout} color='inherit'>
					log out
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navigation;
