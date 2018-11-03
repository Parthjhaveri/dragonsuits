import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/home-page/homepage.jsx'; 
import Product_description from './components/cart/product-page.jsx'; 
import FeaturedProduct from './components/home-page/homepage.jsx'; 

const Router = () => (
	<Switch>
		<Route exact path='/' component={Homepage} /> 
		<Route exact path='/product/:prod/:id' component={Product_description} />
	</Switch>
)

export default Router;



