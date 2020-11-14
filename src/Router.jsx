import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Contexts
import { SnackbarProvider } from './contexts/snackbar';
import { AuthProvider } from './contexts/auth';
// Components
import { Snackbar, Navigation } from 'components';
// Pages
import { Home, Login, Register, Shop } from 'containers';

export default () => {
	return (
		<Router>
			<AuthProvider>
				<SnackbarProvider>
					<Snackbar />
					<Navigation />

					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/shop' component={Shop} />
						<Route path='/' component={Home} />
					</Switch>
				</SnackbarProvider>
			</AuthProvider>
		</Router>
	);
};
