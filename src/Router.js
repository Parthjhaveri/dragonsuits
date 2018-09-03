import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/home-page/homepage.jsx'; 

const Router = () => (
	<Switch>
		<Route exact path='/' component={Homepage} /> 
	</Switch>
)

export default Router;