/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:34:31
 * @Last Modified by:   Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 01:34:31
 */

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound: React.FC = () => {
	return (
		<Container>
			<Row>
				<Col lg={6} xs={12}>
					<div style={styles.content} className='text-center'>
						<h1>404: The page you are looking for isn’t here</h1>
						<h2>
							You either tried some shady route or you came here by mistake. Whichever it is, try using the
							navigation
						</h2>
						<img alt='Under development' style={styles.image} src='/images/undraw_page_not_found_su7k.svg' />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

const styles = {
	content: {
		paddingTop: 150,
		// textAlign: 'center',
	},
	image: {
		marginTop: 50,
		display: 'inline-block',
		maxWidth: '100%',
		width: 560,
	},
};

export default NotFound;
