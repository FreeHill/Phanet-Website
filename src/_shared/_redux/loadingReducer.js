/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-09 20:32:55
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-26 05:45:00
 */

import { Constants } from './constants';

export default (state = null, action) => {
	switch (action.type) {
		case Constants.actions.LOADING:
			return action.payload;
		default:
			return state;
	}
};
