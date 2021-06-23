import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <SectionContainer bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
            
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText && 
                            <RightButton>
                                {rightBtnText}
                            </RightButton>}   
                        </ButtonGroup>
                </Fade>
            <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
            
        </SectionContainer>
    )
}

export default Section;

const SectionContainer = styled.div`
            z-index: 10;
            width: 100vw;
            height: 100vh;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image:url('/images/model-s.jpg');
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-image: ${props => `url('/images/${props.bgImage}')`};
            `;

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 3rem;

    @media(max-width: 48em){
        flex-direction: column
    }
`;
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, .8);
    height: 4rem;
    width: 25.6rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    cursor: pointer;
    margin: .8rem;
`;

const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity: 0.65;
    color: #000;
`;

const DownArrow = styled.img`
    margin-top: 2rem;
    height: 4rem;
    animation: animateDown infinite 1.5s;
    overflow: hidden;
`;


