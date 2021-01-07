import React, { useState } from 'react';
// Contexts
import { useUserContext } from 'contexts/user';
// Graphql
import { useQuery } from '@apollo/client';
import { POKEMONS } from 'graphql.js';
// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { Grid } from '@material-ui/core';
// Components
import { PokemonCard, CatchDialog } from 'components';

const Home = () => {
	const { loading, error, data } = useQuery(POKEMONS);
	const { user } = useUserContext();
	const [target, setTarget] = useState(null);

	if (loading)
		return (
			<Backdrop open={loading}>
				<CircularProgress />
			</Backdrop>
		);

	console.log(data.pokemons);

	return (
		<div>
			<CatchDialog target={target} onClose={() => setTarget(null)} />
			<Grid container>
				{data.pokemons.map((pokemon) => (
					<Grid item key={pokemon.id} xs={12} sm={4} md={3} lg={2}>
						<PokemonCard
							pokemon={pokemon}
							isCaptured={user.captured.includes(parseInt(pokemon.id))}
							onClick={(pokemon) => setTarget(pokemon)}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Home;
