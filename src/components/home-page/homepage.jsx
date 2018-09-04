import React from 'react';
import '../../styles/App.css';

import FeaturedProds from './index.js';
import data from '../../data/apparel/products.json';

const Homepage = props => {
return <div className='app-main-homepage'>

			<div className='app-main-homepage__main-splasher-section'>

				<div className='main-splasher-section__left-intro-section'>

					<hr className='left-intro-section__hr' />

					<div className='left-intro-section__wrapper'>	
						<div className='left-intro-section__heading'>
							<p>Dragon Suits</p>
						</div>

						<div className='left-intro-section__shop-men'>
							<p>Men</p>
						</div>

						<div className='left-intro-section__shop-women'>
							<p>Women</p>
						</div>
					</div>

					<div className='left-intro-section__cities-wrapper'>
						<p className='cities-wrapper__cities'>New York</p>
						<p className='cities-wrapper__cities'>Paris</p>
						<p className='cities-wrapper__cities'>London</p>
						<p className='cities-wrapper__cities'>Rome</p>
						<p className='cities-wrapper__cities'>Mumbai</p>
						<p className='cities-wrapper__cities'>Shanghai</p>
					</div>

				</div>

			</div>

			<FeaturedProds products={ data.products }/>

		</div>
}

export default Homepage;



