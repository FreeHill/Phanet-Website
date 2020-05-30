/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-03 20:36:02
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-26 05:45:15
 */

import { combineReducers } from 'redux';
import loadingReducer from './_shared/_redux/loadingReducer';

export default combineReducers({
	loading: loadingReducer,
});
