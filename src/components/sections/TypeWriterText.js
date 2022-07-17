import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button'

const Title = styled.h2`
	font-size: ${props => props.theme.fontxxl};
	text-transform: capitalize;
	width:80%;
	color: ${props => props.theme.text};
	align-self:flex-start;

	span{
		text-transform: uppercase;
		font-family:'Akaya Telivigala', cursiv;
	}

	.text-1{
		color:blue;
	}
	.text-2{
		color:orange;
	}
	.text-3{
		color:red;
	}
`

const SubTitle = styled.h3`
	font-size: ${props => props.theme.fontlg};
	text-transform: capitalize;
	color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
	font-weight:600;
	margin-bottom: 1rem;
	width:80%;
	align-self:flex-start;
`

const ButtonContainer = styled.div`
width:80%;
align-self:flex-start;
`

const Typewritertext = () => {
    return (
			<>
       	<Title>
           Discover a new era of cool
					 <Typewriter
					 		options={{
								 autoStart: true,
								 loop:true
							 }}
							onInit={(typewriter) => {
								typewriter.typeString('<span class="text-1">NFTs.</span>')
								.pauseFor(2000)
								.deleteAll()
								.typeString('<span class="text-2">Collectible Items.</span>')	
								.pauseFor(2000)
								.deleteAll()
								.typeString('<span class="text-3">App Killers!</span>')
								.pauseFor(2000)
								.deleteAll()
								.start()
							}}
						/>
       	</Title>
				<SubTitle>Bored Of Apes? Try Something New.</SubTitle>
				<ButtonContainer>
					<Button link='#about' text='Explore'></Button>
				</ButtonContainer>
			</>
    );
};

export default Typewritertext;