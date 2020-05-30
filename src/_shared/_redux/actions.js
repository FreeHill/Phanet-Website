/*
 * @Author: Nazzah Dieu-Donne
 * @Date: 2019-02-04 19:00:57
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-26 05:44:24
 */

import { Constants } from './constants';

export const setLoading = (payload) => ({
	type: Constants.actions.LOADING,
	payload,
});
