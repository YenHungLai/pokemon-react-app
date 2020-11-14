import React from 'react';
// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
// Local
import styles from './PokeballCard.module.css';

const PokeballCard = ({ ball, ...props }) => {
	return (
		<Card className={styles.root} classes={{ root: props.styles }} raised>
			<img src={ball.img} alt='item' className={styles.img} height='170px' />
			<CardContent>
				<Typography variant='h5' className={styles.item}>
					{ball.name}
				</Typography>
				<Typography>Efficiency</Typography>
				<Rating name='read-only' value={ball.efficiency} readOnly />
			</CardContent>
			<CardActions className={styles.actions}>
				<InputBase
					startAdornment={
						<IconButton>
							<RemoveIcon />
						</IconButton>
					}
					endAdornment={
						<IconButton>
							<AddIcon />
						</IconButton>
					}
					className={styles.inputRoot}
					classes={{ input: styles.input }}
					defaultValue={0}
				/>
				<Button className={styles.button} variant='contained'>
					buy
				</Button>
			</CardActions>
		</Card>
	);
};

export default PokeballCard;
