import React from 'react';
import { useQuery } from '@apollo/client';
import { POKEMONS } from 'graphql.js';
// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';
// Components
import { PokemonCard } from 'components';

const Home = () => {
	const {
		loading,
		error,
		data: { pokemons },
	} = useQuery(POKEMONS);

	if (loading) return <CircularProgress />;

	return (
		<div>
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	);
};

export default Home;
