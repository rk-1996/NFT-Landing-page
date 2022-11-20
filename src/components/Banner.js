import React from 'react';
import styled from 'styled-components';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';
import img7 from '../assets/Nfts/bighead-7.svg';
import img8 from '../assets/Nfts/bighead-8.svg';
import img9 from '../assets/Nfts/bighead-9.svg';
import img10 from '../assets/Nfts/bighead-10.svg';
import Button from '../components/sections/Button'

const Section = styled.section`
	height:25rem;
	width:100vw;
	position:relative;
    border-top:2px solid ${props => props.theme.text};
    border-top:2px solid ${props => props.theme.text};
	background-color:${props => `rgba(${props.theme.textRgba},0.9)`};
    display:flex;
	justify-content:center;
	align-items:center;
	
    overflow:hidden;
`

const ImageContainer = styled.div`
	width:100%;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%, -50%);

	display:flex;
	justify-content:center;
	align-items:center;
	opacity:0.2;

	img{
		width:15rem;
		height:auto;
	}
`
const Title = styled.h1`
	font-size: ${props => props.theme.fontxxxl};
	color:${props => props.theme.body};
	padding:1rem 2rem;
	z-index:10;
	width:35%;
	text-transform:capitalize;

	text-shadow:1px 1px 2px ${props => props.theme.text};
`
const ButtonContainer = styled.div`
	display:flex;
	width:35%;
	justify-content: flex-end;

`

const BtnJoinNow = styled.button`
	display:inline-block;
	background-color:${props => props.theme.body};
	color:${props => props.theme.text};
	outline:none;
	border:none;
	font-weight:600;
	font-size:${props => props.theme.fontlg};
	padding:1.5rem 3rem;
	border-radius:50px;
	cursor:pointer;
	position:relative;
	transition: all 0.2s ease;

	&:hover{
		transform: scale(0.9)
	}

	&::after{
		content:" ";
		position:absolute;
		top:50%;
		left:50%;
		transform: translate(-50%, -50%) scale(0);
		border:2px solid ${props => props.theme.body};
		width:100%;
		height:100%;
		border-radius: 50px;
		transition: all 0.2s ease;
	}

	&:hover::after{
		transform: translate(-50%, -50%) scale(1);
		padding:0.3rem;
	}
`

const Banner = () => {
    return (
        <Section>
            <ImageContainer>
							<img src={img5} alt="Banner"/>
							<img src={img6} alt="Banner"/>
							<img src={img7} alt="Banner"/>
							<img src={img8} alt="Banner"/>
							<img src={img9} alt="Banner"/>
							<img src={img10} alt="Banner"/>
            </ImageContainer>
						<Title>
							Join the <br/> Club
						</Title>
						<ButtonContainer>
							<BtnJoinNow>
								Join Now
							</BtnJoinNow>
						</ButtonContainer>
        </Section>
    );
};

export default Banner;