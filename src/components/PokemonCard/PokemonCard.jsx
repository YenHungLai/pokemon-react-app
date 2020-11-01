import React from 'react';
// Material UI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import styles from './PokemonCard.module.css';

const PokemonCard = ({ pokemon }) => {
	return (
		<Card className={styles.root}>
			<CardMedia className={styles.img} component='img' src={pokemon.sprites.front_default} title={pokemon.name} />
			<CardContent>
				<Typography gutterBottom className={styles.name} align='center'>
					{pokemon.name}
				</Typography>
				{pokemon.types.map((type) => (
					<Chip key={type.name} className={styles.chip} label={type.name} />
				))}
			</CardContent>
		</Card>
	);
};

export default PokemonCard;
