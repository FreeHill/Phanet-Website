/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-05-27 01:24:37
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-05-27 04:11:31
 */

import React, { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { GiArrowScope } from 'react-icons/gi';
import CarouselImage from '../../../_shared/assets/images/carousel.jpg';
// import CarouselImage1 from '../../../_shared/assets/images/carousel_1.jpg';

const CustomCarousel: React.FC = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex: number, e: any) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={true}>
			<Carousel.Item>
				<img className='d-block w-100' src={CarouselImage} alt='First slide' />
				<Carousel.Caption className='carousel-caption-left'>
					<p className='carousel-list-item'>
						<GiArrowScope /> {''}
						Fast expanding group of intercessors of all ages, sexes and races
					</p>
					<p className='carousel-list-item'>
						<GiArrowScope /> {''}
						Non-governmental, interdenominational network of Christians{' '}
					</p>
					<p className='carousel-list-item'>
						<GiArrowScope /> {''}
						Passion to intercede and share the word of God with the world
					</p>
					<p className='carousel-list-item'>
						<GiArrowScope /> {''}
						Raising one billion (1,000,000,000) intercessors across the world for Christ by 2050
					</p>

					<Button className='custom-button mt-md-5' size='lg'>
						<p>BECOME AN INTERCESSOR!</p>
					</Button>
				</Carousel.Caption>
			</Carousel.Item>
			{/* <Carousel.Item>
				<img className='d-block w-100' src={CarouselImage1} alt='Second slide' />
				<Carousel.Caption className='carousel-caption-right'>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item> */}
		</Carousel>
	);
};

export default CustomCarousel;
