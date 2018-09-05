import React from 'react';


import '../../styles/App.css';
import FeaturedProduct from './featured-product.js';

////////////////////////////////////////////////////////////
// FEATURED PRODUCTS SECTION ON HOME PAGE
////////////////////////////////////////////////////////////

const FeaturedProds = props => {
return	<div className='app-main-homepage__featured-prods'>
			
			{
				props.products.map( (product, key) => 
					<FeaturedProduct product={product} key={key} />)
			}
	
		</div>
}

export default FeaturedProds;



