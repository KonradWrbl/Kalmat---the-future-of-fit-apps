import React from 'react';
import GrowthSelectionInput from './GrowthSelectionInput';
import styled from 'styled-components';
import hight from  '../../images/hight.svg'

const GrowthSelectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NewGrowthSelectionInput = styled(GrowthSelectionInput)`
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

const GrowthSelection = () => {
    return(
        <GrowthSelectionWrapper>
            <StartMainText>Mierzę ...</StartMainText>
            <NewGrowthSelectionInput />
            <Callendar src={hight} />
        </GrowthSelectionWrapper>
    )
}

export default GrowthSelection