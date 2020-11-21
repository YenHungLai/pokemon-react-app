import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// Contexts
import { useSnackbarContext } from 'contexts/snackbar';
// Material UI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
// Local
import balls from 'containers/Shop/balls';
import styles from './CatchDialog.module.css';

const Ball = ({ ball, amount, throwBall }) => (
	<div className={styles.ballRoot}>
		<Tooltip
			title={`You have a ${(ball.efficiency / 5) * 100}% chance!`}
			TransitionComponent={Zoom}
			placement='top'
			arrow
			classes={{ tooltip: styles.tooltip }}
		>
			<IconButton
				className={styles.iconButton}
				disabled={amount === 0}
				onClick={() => {
					throwBall(ball.name, ball.efficiency);
				}}
			>
				<img src={ball.img} alt={ball.name} />
			</IconButton>
		</Tooltip>
		<Typography className={styles.amount} align='center'>
			x {amount}
		</Typography>
	</div>
);

const CatchDialog = ({ target, bag, ...props }) => {
	const [loading, setLoading] = useState(false);
	const { setSnackbar } = useSnackbarContext();

	const throwBall = (type, efficiency) => {
		props.throwBall(type);
		setLoading(true);
		setTimeout(() => {
			// Use efficiency to determine if captured.
			const random = Math.random().toFixed(1);
			if (random < efficiency / 5) {
				setSnackbar({ msg: `You have captured ${target.name}!`, severity: 'success' });
				props.capture(parseInt(target.id));
				props.onClose();
			} else {
				setSnackbar({ msg: `Oops ${target.name} escaped!`, severity: 'info' });
			}
			setLoading(false);
		}, 1000);
	};

	return ReactDOM.createPortal(
		<Dialog open={!!target} fullWidth className={styles.root} onBackdropClick={props.onClose}>
			{target && <DialogTitle className={styles.title}>Use pokemon balls to catch {target.name}!</DialogTitle>}
			<DialogContent className={styles.content}>
				{loading ? (
					<CircularProgress className={styles.loading} />
				) : (
					<img className={styles.pokemonImg} src={target?.sprites.front_default} alt={target?.name} height='300px' />
				)}
			</DialogContent>
			<DialogActions className={styles.actions}>
				{balls.map((ball) => (
					<Ball key={ball.name} ball={ball} amount={bag[ball.name]} throwBall={throwBall} />
				))}
			</DialogActions>
		</Dialog>,
		document.querySelector('#root')
	);
};

export default CatchDialog;
