import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import { StylesProvider } from '@material-ui/core/styles';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<StylesProvider injectFirst>
				<Router />
			</StylesProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
