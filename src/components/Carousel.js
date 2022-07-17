import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../assets/Nfts/bighead-1.svg';
import img2 from '../assets/Nfts/bighead-2.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';
import img7 from '../assets/Nfts/bighead-7.svg';
import img8 from '../assets/Nfts/bighead-8.svg';
import img9 from '../assets/Nfts/bighead-9.svg';
import img10 from '../assets/Nfts/bighead-10.svg';

import Arrow from '../assets/Arrow.svg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination,Navigation,Autoplay,EffectCards } from "swiper";

const Container = styled.div`
  width:25vw;
	height:70vh;
	.swiper{
		width:100%;
		height:100%;
	}
	.swiper-slide{
		background-color:${props => props.theme.carouselColor};
		border-radius:20px;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.swiper-button-next{
		color:${props=>props.theme.text};
		right:0;
		width:4rem;
		background-image:url(${Arrow});
		background-position:center;
		background-size:cover;
		top:60%;
		&:after{
			display:none;
		}
	}
	.swiper-button-prev{
		color:${props=>props.theme.text};
		left:0;
		transform:rotate(180deg);
		width:4rem;
		top:60%;
		background-image:url(${Arrow});
		background-position:center;
		background-size:cover;

		&:after{
			display:none;
		}
	}
`

const Carousel = () => {
    return (
			<Container>
				<Swiper
					autoplay={{
						delay:2000,
						disableOnInteraction:false,	
					}}
					pagination={{
						type:"fraction"
					}}
					navigation={true}
					scrollbar={{
						draggable:true
					}}
					effect={"cards"}
					grabCursor={true}
					modules={[EffectCards,Pagination,Navigation,Autoplay]}
					className="mySwiper"
				>
					<SwiperSlide><img src={img1} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img2} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img3} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img4} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img5} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img6} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img7} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img8} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img9} alt="img" /></SwiperSlide>
					<SwiperSlide><img src={img10} alt="img" /></SwiperSlide>
				</Swiper>	
			</Container>
    );
};

export default Carousel;