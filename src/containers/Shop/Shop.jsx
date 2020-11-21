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

	const onBuy = (type) => {
		if (purchase[type] === 0) return;
		dispatch({ type: 'BUY_BALL', payload: { type, amount: purchase[type] } });
		setSnackbar({ msg: `You have purchased ${purchase[type]} ${type}`, severity: 'success' });
		setPurchase({ ...purchase, [type]: 0 });
	};

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.badges}>
					{balls.map((ball) => (
						<Badge
							key={ball.name}
							badgeContent={user.bag[ball.name]}
							showZero
							color='secondary'
							classes={{ root: styles.badgeRoot, badge: styles.badge }}
						>
							<img src={ball.img} alt={ball.name} height='50px' />
						</Badge>
					))}
				</div>
				<div className={styles.sliderContainer}>
					<Slider {...settings}>
						{balls.map((ball) => (
							<PokeballCard
								key={ball.name}
								ball={ball}
								styles={styles.pokeballCard}
								onAdd={onAdd}
								onRemove={onRemove}
								onBuy={onBuy}
								amount={purchase[ball.name]}
							/>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Shop;
