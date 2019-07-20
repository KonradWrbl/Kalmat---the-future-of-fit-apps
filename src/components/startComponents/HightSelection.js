import React from 'react';
import HightSelectionInput from './HightSelectionInput';
import styled from 'styled-components';
import hight from  '../../images/hight.svg'

const HightSelectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NewHightSelectionInput = styled(HightSelectionInput)`
    width: 90%;
    height: 20px;
`

const Callendar = styled.img`
    width: 40%;
`

const StartMainText = styled.p`
    font-size: 2em;
    opacity: .3;
    font-weight: bold;
    padding: 0 20% 0 0;
`

const HightSelection = () => {
    return(
        <HightSelectionWrapper>
            <StartMainText>Mierzę ...</StartMainText>
            <NewHightSelectionInput />
            <Callendar src={hight} />
        </HightSelectionWrapper>
    )
}

export default HightSelection