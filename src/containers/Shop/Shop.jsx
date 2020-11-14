import React from 'react';
// Material UI

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
	const settings = {
		dots: true,
	};

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<Slider {...settings}>
					{balls.map((ball) => (
						<PokeballCard ball={ball} styles={styles.pokeballCard} />
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Shop;
