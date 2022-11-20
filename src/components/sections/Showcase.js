import React, { useRef } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import img1 from '../../assets/Nfts/bighead-1.svg';
import img2 from '../../assets/Nfts/bighead-2.svg';
import img3 from '../../assets/Nfts/bighead-3.svg';
import img4 from '../../assets/Nfts/bighead-4.svg';
import img5 from '../../assets/Nfts/bighead-5.svg';
import img6 from '../../assets/Nfts/bighead-6.svg';
import img7 from '../../assets/Nfts/bighead-7.svg';
import img8 from '../../assets/Nfts/bighead-8.svg';
import img9 from '../../assets/Nfts/bighead-9.svg';
import img10 from '../../assets/Nfts/bighead-10.svg';
import ETH from "../../assets/icons8-ethereum-48.png";

const Section = styled.section`
	min-height:100vh;
	width:100vw;
	background-color:${props => props.theme.text};
	position:relative;
	display:flex;
	justify-content:center;
	flex-direction:column;
	align-items:center;

	&>*:first-child{
		animation-duration:20s;
	}

	&>*:last-child{
		animation-duration:15s;
	}
`

const move = keyframes`
	0%{
		transform:translateX(100%)
	};
	100%{
		transform:translateX(-100%)
	}
`

const Row = styled.div`
	white-space:nowrap;
	box-sizing:content-box;
	margin:2rem 0;
	display:flex;
	animation:${move} 20s linear infinite ${props => props.direction};
	
`
const ImageContainer = styled.div`
	width:15rem;
	margin: 0 1rem;
	background-color:${props =>props.theme.body};
	border-radius:20px;
	cursor: pointer;

	img{
		width:100%;
		height:auto;

	}
`

const Details = styled.div`
	display:flex;
	justify-content:space-between;
	padding:0.8rem 1rem;
	background-color:${props => props.theme.text};
	border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};
	border-bottom-left-radius:20px;
	border-bottom-right-radius:20px;

	span{
		font-size:${props => props.theme.fontsm};
		color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
		font-weight:600;
		line-height:1.5rem;
	}

	h1{
		font-size:${props => props.theme.fontmd};
		color:${props => props.theme.body};
		font-weight:600;
	}
`

const Price = styled.div`
	display:flex;
	justify-content:flex-start;
	align-items:center;

	img{
		width:1rem;
		height:auto;

	}
`

const NftItems = ({img,number =0 ,price = 0,passRef}) => {
	
	let play = (e) => {
		passRef.current.style.animationPlayState = 'running';
	}

	let pause = (e) => {
		passRef.current.style.animationPlayState = 'paused';
	}
	
	return(
		<ImageContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
			<img src={img} alt="the Weirdo"/>
			<Details>
				<div>
					<span>Club member</span> <br />
					<h1>#{number}</h1>
				</div>

				<div>
					<span>
						price
					</span>
					<Price>
						<img src={ETH} alt="Dimond"/>
						<h1>
							{Number(price).toFixed(1)}
						</h1>
					</Price>
				</div>
			</Details>
		</ImageContainer>
	)
}

const Showcase = () => {

	const Row1Ref = useRef(null);
	const Row2Ref = useRef(null);
    return (
			<Section id='showcase'>
				<Row direction='none' ref={Row1Ref}>
					<NftItems img={img1} number={852} price={1} passRef={Row1Ref}/>
					<NftItems img={img2} number={123} price={1.2} passRef={Row1Ref}/>
					<NftItems img={img3} number={448} price={1.7} passRef={Row1Ref}/>
					<NftItems img={img4} number={220} price={2.5} passRef={Row1Ref}/>
					<NftItems img={img5} number={344} price={2.4} passRef={Row1Ref}/>
				</Row>
				<Row direction='reverse' ref={Row2Ref}>
					<NftItems img={img6} number={658} price={2.3} passRef={Row2Ref}/>
					<NftItems img={img7} number={239} price={4.5} passRef={Row2Ref}/>
					<NftItems img={img8} number={250} price={6.5} passRef={Row2Ref}/>
					<NftItems img={img9} number={340} price={5.3} passRef={Row2Ref}/>
					<NftItems img={img10} number={229} price={3.5} passRef={Row2Ref}/>
				</Row> 
			</Section>
    );
};

export default Showcase;