/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:33:01
 * @Last Modified by:   Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 01:33:01
 */

import React from 'react';
import { Topbar } from './components';

interface IProps {
	children: React.ReactNode;
}

const Minimal: React.FC<IProps> = (props) => {
	const { children } = props;

	return (
		<div>
			<Topbar />
			<main>{children}</main>
		</div>
	);
};

export default Minimal;
