import React from 'react';
// Graphql
import { useQuery } from '@apollo/client';
import { POKEMONS } from 'graphql.js';
// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
// Components
import { PokemonCard } from 'components';

const Home = () => {
	const { loading, error, data } = useQuery(POKEMONS);

	if (loading) return <CircularProgress />;

	console.log(data.pokemons);

	return (
		<div>
			<Grid container>
				{data.pokemons.map((pokemon) => (
					<Grid item key={pokemon.id} xs={12} sm={4} md={3} lg={2}>
						<PokemonCard pokemon={pokemon} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Home;
