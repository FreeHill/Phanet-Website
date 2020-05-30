/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:34:54
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 09:19:11
 */

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Badge, Card, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import { MdGroup, MdKeyboardArrowDown, MdLocationOn, MdShare, MdStars } from 'react-icons/md';
import '../_shared/assets/css/Home.css';
import ellipse2 from '../_shared/assets/images/ellipse10.png';
import ellipse3 from '../_shared/assets/images/ellipse11.png';
import ellipse1 from '../_shared/assets/images/ellipse9.png';
import img1 from '../_shared/assets/images/fred1.png';
import img2 from '../_shared/assets/images/fred2.png';
// import backgroundImage from '../_shared/assets/images/banner1.jpg';
import { Preloader } from '../_shared/components';
import { CustomCarousel } from './components';

const Home: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 100);
	}, []);

	const Completionist = () => <h5 className='text-primary'>Event has began</h5>;

	const countdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
		if (completed) {
			// Render a completed state
			return <Completionist />;
		} else {
			// Render a countdown
			return (
				<Row>
					<Col className={clsx('text-center')}>
						<div className='time-container-circle'>{days}</div>
						<p className='pb-0 pt-1'>Days</p>
					</Col>
					<Col className={clsx('text-center')}>
						<div className='time-container-circle'>{hours}</div>
						<p className='pb-0 pt-1'>Hours</p>
					</Col>
					<Col className={clsx('text-center')}>
						<div className='time-container-circle'>{minutes}</div>
						<p className='pb-0 pt-1'>Minutes</p>
					</Col>
					<Col className={clsx('text-center')}>
						<div className='time-container-circle'>{seconds}</div>
						<p className='pb-0 pt-1'>Seconds</p>
					</Col>
				</Row>
			);
		}
	};

	return (
		<React.Fragment>
			{loading ? (
				<Preloader />
			) : (
				<React.Fragment>
					{/* <div style={styles.bannerStyle} className='banner'></div> */}
					<CustomCarousel />
					<Container>
						<Jumbotron className={clsx('bg-white mt-3 p-4 text-center')}>
							<h3>WHO WE ARE</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptate optio aspernatur tenetur
								voluptatem. Architecto quibusdam nobis laudantium natus maiores, unde rem quisquam magni molestias
								magnam recusandae quo facilis aliquid!
							</p>
							<Row>
								<Col xs={12} md={4} className='py-3'>
									<a href='' className='about-item-link'>
										<div className='about-item' style={styles.aboutItem1}></div>
										<div className='about-item-text'>
											<h5>Lorem Ipsum</h5>
											<p className='mb-0'>Lorem Ipsum</p>
											<MdKeyboardArrowDown size={40} />
										</div>
									</a>
								</Col>
								<Col xs={12} md={4} className='py-3'>
									<a href='' className='about-item-link'>
										<div className='about-item' style={styles.aboutItem2}></div>
										<div className='about-item-text'>
											<h5>Lorem Ipsum</h5>
											<p className='mb-0'>Lorem Ipsum</p>
											<MdKeyboardArrowDown size={40} />
										</div>
									</a>
								</Col>
								<Col xs={12} md={4} className='py-3'>
									<a href='' className='about-item-link'>
										<div className='about-item' style={styles.aboutItem3}></div>
										<div className='about-item-text'>
											<h5>Lorem Ipsum</h5>
											<p className='mb-0'>Lorem Ipsum</p>
											<MdKeyboardArrowDown size={40} />
										</div>
									</a>
								</Col>
							</Row>
						</Jumbotron>
						<Jumbotron className={clsx('bg-white mt-3 p-4')}>
							<Row>
								<Col xs={12} lg={4}>
									<h2>
										<Badge className={clsx('text-white')} variant='primary'>
											UPCOMING EVENT
										</Badge>
									</h2>
									<h4 className={clsx('upcoming-event-title')}>Sharp Conference 2020</h4>
									<p className={clsx('upcoming-event-date')}>On February 8, 2020 </p>
									<p className={clsx('upcoming-event-venue')}>
										at Mfantsipim School , Cape Coast <a href=''>read more...</a>
									</p>
								</Col>
								<Col xs={12} lg={6}>
									<Countdown date={Date.now() + 500000000} renderer={countdownRenderer} />
								</Col>
								<Col xs={12} lg={2} className={clsx('')}>
									<h5 className={clsx('text-pink upcoming-event-share')}>
										Share link <MdShare />
									</h5>
								</Col>
							</Row>
						</Jumbotron>
						<Row className='mb-5'>
							<Col xs={12} md={3}>
								<Card className='mb-5'>
									<Card.Img variant='top' src={img1} />
									<Card.Body>
										<Card.Title>
											Title here
											<div className='bg-primary card-title-underline'></div>
										</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sunt delectus
											laborum accusamus quam dolores cumque maiores sapiente pariatur. Nostrum eius et,
											dicta incidunt nihil earum fugit iste consequatur!
										</Card.Text>
										<a href=''>read more &hellip;</a>
									</Card.Body>
								</Card>
							</Col>
							<Col xs={12} md={3}>
								<Card className='mb-5'>
									<Card.Img variant='top' src={img1} />
									<Card.Body>
										<Card.Title>
											Title here
											<div className='bg-warning card-title-underline'></div>
										</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sunt delectus
											laborum accusamus quam dolores cumque maiores sapiente pariatur. Nostrum eius et,
											dicta incidunt nihil earum fugit iste consequatur!
										</Card.Text>
										<a href='' className='text-warning'>
											read more &hellip;
										</a>
									</Card.Body>
								</Card>
							</Col>
							<Col xs={12} md={3}>
								<Card className='mb-5'>
									<Card.Img variant='top' src={img1} />
									<Card.Body>
										<Card.Title>
											Title here
											<div className='bg-danger card-title-underline'></div>
										</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sunt delectus
											laborum accusamus quam dolores cumque maiores sapiente pariatur. Nostrum eius et,
											dicta incidunt nihil earum fugit iste consequatur!
										</Card.Text>
										<a href='' className='text-danger'>
											read more &hellip;
										</a>
									</Card.Body>
								</Card>
							</Col>
							<Col xs={12} md={3}>
								<Card className='mb-5'>
									<Card.Img variant='top' src={img1} />
									<Card.Body>
										<Card.Title>
											Title here
											<div className='bg-info card-title-underline'></div>
										</Card.Title>
										<Card.Text>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sunt delectus
											laborum accusamus quam dolores cumque maiores sapiente pariatur. Nostrum eius et,
											dicta incidunt nihil earum fugit iste consequatur!
										</Card.Text>
										<a href='' className='text-info'>
											read more &hellip;
										</a>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
					<div className={clsx('milestone')} style={styles.milestone}>
						<Container>
							<Row>
								<Col xs={12} md={4} className={clsx('z-index-50 text-center')}>
									<MdGroup size={60} />
									<h1 className={clsx('text-center')}>200K</h1>
									<p className={clsx('text-center')}>Worldwide Membership</p>
								</Col>
								<Col xs={12} md={4} className={clsx('z-index-50 text-center')}>
									<MdLocationOn size={60} />
									<h1 className={clsx('text-center')}>650</h1>
									<p className={clsx('text-center')}>Worldwide Locations</p>
								</Col>
								<Col xs={12} md={4} className={clsx('z-index-50 text-center')}>
									<MdStars size={60} />
									<h1 className={clsx('text-center')}>5</h1>
									<p className={clsx('text-center')}>Excellence Awards</p>
								</Col>
							</Row>
						</Container>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Home;

const styles = {
	milestone: {
		backgroundImage: `url(${img2})`,
		// backgroundSize: 'cover',
		// backgroundRepeat: 'no-repeat',
		// backgroundPosition: 'center',
	},
	aboutItem1: {
		backgroundImage: `url(${ellipse1})`,
	},
	aboutItem2: {
		backgroundImage: `url(${ellipse2})`,
	},
	aboutItem3: {
		backgroundImage: `url(${ellipse3})`,
	},
};
