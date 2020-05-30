/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:32:23
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 02:26:03
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Footer, Topbar } from './components';

interface IProps {
	children: React.ReactNode;
}

const Main: React.FC<IProps> = (props) => {
	const { children } = props;

	return (
		<React.Fragment>
			<div className='fixed-top p-1 text-center topbar-notification'>
				<p>Important notice : National Dawn meeting comes off !</p>
			</div>
			<Topbar />
			<main>
				{children}
				<Footer />
			</main>
		</React.Fragment>
	);
};

Main.propTypes = {
	children: PropTypes.node,
};

export default Main;
