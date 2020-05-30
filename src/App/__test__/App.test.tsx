/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:33:22
 * @Last Modified by:   Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 01:33:22
 */

import { render } from '@testing-library/react';
import React from 'react';
import App from '../App';

test('renders learn react link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
