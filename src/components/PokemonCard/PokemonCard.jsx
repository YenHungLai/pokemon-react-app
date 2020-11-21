import React from 'react';
// Material UI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

import styles from './PokemonCard.module.css';

const TYPE_COLOR_MAP = {
	normal: '#B26327',
	fighting: '#E8E95F',
	flying: '#E5E7EA',
	poison: '#B92025',
	ground: '#78431B',
	rock: '#8B7E72',
	bug: '#BFD42F',
	ghost: '#8B7E72',
	steel: '#352313',
	fire: '#F36F21',
	water: '#E1F5FD',
	grass: '#54B947',
	electric: '#F5B914',
	psychic: '#C03595',
	ice: '#C9EAFA',
	dragon: '#BFD42F',
	fairy: '#FACE85',
	shadow: '#F5B914',
};

const PokemonCard = ({ pokemon, isCaptured, onClick }) => {
	return (
		<Card className={styles.root} raised>
			{isCaptured && <CheckCircleOutlinedIcon className={styles.icon} />}
			<CardActionArea onClick={() => onClick(pokemon)}>
				<CardMedia className={styles.img} component='img' src={pokemon.sprites.front_default} title={pokemon.name} />
			</CardActionArea>
			<CardContent className={styles.cardContent}>
				<Typography gutterBottom className={styles.name} align='center'>
					{pokemon.name}
				</Typography>
				{pokemon.types.map((type) => (
					<Chip key={type} className={styles.chip} label={type} style={{ backgroundColor: TYPE_COLOR_MAP[type] }} />
				))}
			</CardContent>
		</Card>
	);
};

export default PokemonCard;
