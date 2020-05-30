import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Home as HomeView } from './Home';
import { NotFound as NotFoundView } from './NotFound';
import { RouteWithLayout } from './_shared/components';
import { Main as MainLayout, Minimal as MinimalLayout } from './_shared/layouts';

const Routes = () => {
	return (
		<Switch>
			<RouteWithLayout component={HomeView} exact layout={MainLayout} path='/' />
			{/* //other routes go here */}
			<RouteWithLayout component={NotFoundView} exact layout={MinimalLayout} path='/not-found' />
			<Redirect to='/not-found' />
		</Switch>
	);
};

export default Routes;
