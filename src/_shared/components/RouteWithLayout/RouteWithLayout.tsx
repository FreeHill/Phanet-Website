/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:31:26
 * @Last Modified by:   Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 01:31:26
 */

import React from 'react';
import { Route } from 'react-router-dom';

interface IProps {
	layout: any;
	component: any;
	exact: boolean;
	path: string;
}

const RouteWithLayout: React.FC<IProps> = (props) => {
	const { layout: Layout, component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	);
};

export default RouteWithLayout;
