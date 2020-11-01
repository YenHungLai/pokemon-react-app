import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { ApolloClient, InMemoryCache, gql, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Router />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
