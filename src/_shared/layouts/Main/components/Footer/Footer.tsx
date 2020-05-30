/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:31:49
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 06:43:20
 */

import clsx from 'clsx';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { MdEmail, MdPhone } from 'react-icons/md';
import facebook from '../../../../assets/images/facebook.svg';
import instagram from '../../../../assets/images/instagram.svg';
import twitter from '../../../../assets/images/twitter.svg';
import whatsapp from '../../../../assets/images/whatsapp.svg';

interface IProps {
	className?: string;
}

const Footer: React.FC<IProps> = (props) => {
	const { className, ...rest } = props;

	return (
		<div {...rest} className={clsx(className)}>
			<Container fluid className={clsx('footer pt-5 pb-3 text-light')}>
				<Row>
					<Col xs={12} md={4} className={clsx('text-center')}>
						<h4>Address</h4>
						<ul className={clsx('address-list')}>
							<li className={clsx('address-list-item')}>P.O. Box 121</li>
							<li className={clsx('address-list-item')}>Dansoman</li>
							<li className={clsx('address-list-item')}>Accra-Ghana</li>
						</ul>
					</Col>
					<Col xs={12} md={4} className={clsx('text-center')}>
						<h4>Contact</h4>
						<ul className={clsx('contact-list')}>
							<li className={clsx('contact-list-item')}>
								<MdPhone fontSize='20' className='mr-1' />
								<a href='tel:+2332555000'>+2332555000</a>{' '}
							</li>
							<li className={clsx('contact-list-item')}>
								<MdEmail fontSize='20' className='mr-1' />
								<a href='mailto:phanetinternational@gmail.com'>phanetinternational@gmail.com</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={4} className={clsx('text-center')}>
						<h4>Follow Us</h4>
						<ul className={clsx('social-icon-list  mt-3')}>
							<li className={clsx('social-icon-list-item')}>
								<a href=''>
									<Image
										src={whatsapp}
										height='40'
										width='40'
										className='box-shadow social-icon'
										roundedCircle
									/>
								</a>
							</li>
							<li className={clsx('social-icon-list-item')}>
								<a href=''>
									<Image
										src={twitter}
										height='40'
										width='40'
										className='box-shadow social-icon'
										roundedCircle
									/>
								</a>
							</li>
							<li className={clsx('social-icon-list-item')}>
								<a href=''>
									<Image
										src={facebook}
										height='40'
										width='40'
										className='box-shadow social-icon'
										roundedCircle
									/>
								</a>
							</li>
							<li className={clsx('social-icon-list-item')}>
								<a href=''>
									<Image
										src={instagram}
										height='40'
										width='40'
										className='box-shadow social-icon'
										roundedCircle
									/>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<Container fluid className={clsx('footer-copyright text-light text-center p-3')}>
				&copy; {new Date().getFullYear()} Phanerosis Prayer Network International
			</Container>
		</div>
	);
};

export default Footer;
