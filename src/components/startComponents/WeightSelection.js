import React from 'react';
import WeightSelectionInput from './WeightSelectionInput';
import styled from 'styled-components';
import weight from  '../../images/weight.svg'

const WeightSelectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NewWeightSelectionInput = styled(WeightSelectionInput)`
    width: 90%;
    height: 20px;
`

const Weight = styled.img`
    width: 40%;
`

const StartMainText = styled.p`
    font-size: 2em;
    opacity: .3;
    font-weight: bold;
    padding: 0 20% 0 0;
`

const WeightSelection = () => {
    return(
        <WeightSelectionWrapper>

            <StartMainText>Ważę ...</StartMainText>
            <NewWeightSelectionInput />
            <Weight src={weight} />
        </WeightSelectionWrapper>
    )
}

export default WeightSelection