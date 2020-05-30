/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:33:29
 * @Last Modified by:   Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 01:33:29
 */

import { createBrowserHistory } from 'history';
import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Router } from 'react-router-dom';
import validate from 'validate.js';
import Routes from '../Routes';
import '../_shared/assets/scss/index.scss';
import validators from '../_shared/common/validators';
import './App.css';

const browserHistory = createBrowserHistory();

validate.validators = {
	...validate.validators,
	...validators,
};

const App: React.FC = () => {
	return (
		<Router history={browserHistory}>
			<Routes />
		</Router>
	);
};

export default App;
