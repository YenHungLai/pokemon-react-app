import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages
import { Home } from 'containers';

export default () => {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} />
			</Switch>
		</Router>
	);
};
