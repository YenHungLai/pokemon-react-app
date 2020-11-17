import React, { useState } from 'react';
// Material UI
import Badge from '@material-ui/core/Badge';
// Contexts
import { useUserContext } from 'contexts/user';
import { useSnackbarContext } from 'contexts/snackbar';
// Modules
import Slider from 'react-slick';
// Components
import { PokeballCard } from 'components';
// Local
import balls from './balls.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Shop.module.css';

const Shop = () => {
	const [purchase, setPurchase] = useState({});
	const { user, dispatch } = useUserContext();
	const { setSnackbar } = useSnackbarContext();
	const settings = {
		dots: true,
	};

	const onAdd = (type) => {
		if (purchase.hasOwnProperty(type)) setPurchase({ ...purchase, [type]: purchase[type] + 1 });
		else setPurchase({ ...purchase, [type]: 1 });
	};

	const onRemove = (type) => {
		if (purchase[type] > 0) setPurchase({ ...purchase, [type]: purchase[type] - 1 });
	};

	const onBuy = () => {
		if (Object.keys(purchase).length === 0) return;
		dispatch({ type: 'BUY_BALL', payload: purchase });
		setPurchase({});
		setSnackbar({ msg: 'You have purchased pokemon balls', severity: 'success' });
	};

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.badges}>
					{balls.map((ball) => (
						<Badge
							key={ball.name}
							badgeContent={user.bag[ball.name.toLowerCase()]}
							showZero
							color='secondary'
							classes={{ root: styles.badgeRoot, badge: styles.badge }}
						>
							<img src={ball.img} alt={ball.name} height='50px' />
						</Badge>
					))}
				</div>
				<Slider {...settings}>
					{balls.map((ball) => (
						<PokeballCard
							key={ball.name}
							ball={ball}
							styles={styles.pokeballCard}
							onAdd={onAdd}
							onRemove={onRemove}
							onBuy={onBuy}
							amount={purchase[ball.name.toLowerCase()]}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Shop;
