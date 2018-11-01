import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/home-page/homepage.jsx'; 
import Product_description from './components/cart/product-page.jsx'; 
import FeaturedProduct from './components/home-page/homepage.jsx'; 

const Router = () => (
	<Switch>
		<Route exact path='/' component={Homepage} /> 
		<Route exact path='/product/:prod' component={Product_description} />
		{//<Route exact path='/cart' component={Cart} />
		} 
	</Switch>
)

export default Router;