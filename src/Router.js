import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/home-page/homepage.jsx'; 
import Cart from './components/cart/cart.jsx'; 

const Router = () => (
	<Switch>
		<Route exact path='/' component={Homepage} /> 
		<Route exact path='/cart' component={Cart} /> 
	</Switch>
)

export default Router;