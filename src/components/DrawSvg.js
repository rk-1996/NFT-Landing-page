import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Vector from '../Icons/Vector'

const VectorContainer = styled.div`
	position: absolute;
	top:0.5rem;
	left:50%;
	transform: translateX(-50%);
	width:100%;
	height:100%;
	overflow:hidden;

	svg{
		width:100%;
		height:100%;
	}
`
const Bounce = keyframes`
	from{ transform: translateX(-50%) scale(0.5); }
	to{ transform: translateX(-50%) scale(1); }
`

const Ball = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 1.5rem;
	height: 1.5rem;
	border-radius:50%;
	background-color:${props => props.theme.text};
	animation:${Bounce} 0.5s linear infinite alternate;
`

const DrawSvg = () => {
	const ref = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	const ballRef = useRef(null);
	useLayoutEffect(() =>{
		let element = ref.current;
		let svg = document.getElementsByClassName("svg-path")[0];
		const length = svg.getTotalLength();
		console.log(length);
		//start positioning of svg drawing
		svg.style.strokeDasharray = length;

		//Hide svg before scrolling start
		svg.style.strokeDashoffset = length;

		let t1 = gsap.timeline({
			scrollTrigger:{
				trigger:element,
				start:"top center",
				end:"bottom bottom",
				onUpdate:(self) => {
					const draw = length * self.progress;

					//reverse drawing when scroll up
					svg.style.strokeDashoffset = length - draw;
				},

				onToggle: (self) => {
					if(self.isActive){
						ballRef.current.style.display = 'none';
					}else{
						ballRef.current.style.display = 'inline-block';
					}
				}
			}
		})

		console.log(length);
		return() =>{
			if(t1) t1.kill();
		};

	},[])
	
    return (
			<>
				<VectorContainer ref={ref}>
						<Ball ref={ballRef}>

						</Ball>
						<Vector />
				</VectorContainer>
			</>
    );
};

export default DrawSvg;