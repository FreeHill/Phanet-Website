/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:34:19
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 09:12:12
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App/App';
import allReducers from './combineReducers';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Provider
			store={createStore(
				allReducers,
				(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
			)}
		>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
