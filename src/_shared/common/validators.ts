/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:30:36
 * @Last Modified by:   Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 01:30:36
 */

const checked = (value: any, options: any) => {
	if (value !== true) {
		return options.message || 'must be checked';
	}
};

export default {
	checked,
};
