/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:32:07
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 05:00:32
 */

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../assets/images/logo.svg';

const Topbar: React.FC = () => {
	const [headerColor, setHeaderColor] = useState<string>('transparent');

	const listenScrollEvent = () => {
		if (window.scrollY > 100) {
			setHeaderColor('white');
		} else {
			setHeaderColor('transparent');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
		if (window.scrollY > 100) {
			setHeaderColor('white');
		}
	}, []);

	return (
		<React.Fragment>
			<Navbar
				bg={headerColor}
				expand='lg'
				fixed='top'
				variant={headerColor === 'white' ? 'light' : 'dark'}
				className={clsx('phanet-navbar', headerColor === 'white' ? 'shadow' : '')}
			>
				<Navbar.Brand href='#home'>
					<img
						src={logo}
						width='auto'
						height={headerColor === 'white' ? '45' : '70'}
						className='d-inline-block align-top'
						alt='React Bootstrap logo'
					/>{' '}
					<span className='navbar-text'>
						PHANEROSIS <br /> PRAYER NETWORK <br /> INTERNATIONAL
					</span>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						{/* <Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#link'>Link</Nav.Link>
					<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
					</NavDropdown> */}
					</Nav>
					<Nav>
						<Nav.Link href='#home'>WHO WE ARE</Nav.Link>
						<Nav.Link href='#link'>EVENTS</Nav.Link>
						<Nav.Link href='#link'>MEDIA</Nav.Link>
						<Nav.Link href='#link'>LEADERSHIP</Nav.Link>
						<Nav.Link href='#link'>SPONSOR</Nav.Link>
						<Nav.Link href='#link'>NETWORK</Nav.Link>
						<Nav.Link href='#link'>CONTACT US</Nav.Link>
						<Nav.Link href='#link' id={headerColor === 'white' ? 'get-connected-nav-link' : ''}>
							GET CONNECTED
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</React.Fragment>
	);
};

export default Topbar;
