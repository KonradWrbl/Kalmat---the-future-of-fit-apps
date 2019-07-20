import React from 'react';
import AgeSelectionInput from './AgeSelectionInput';
import styled from 'styled-components';
import callendar from  '../../images/callendar.svg'

const AgeSelectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NewAgeSelectionInput = styled(AgeSelectionInput)`
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

const AgeSelection = () => {
    return(
        <AgeSelectionWrapper>

            <StartMainText>Mam ...</StartMainText>
            <NewAgeSelectionInput />
            <Callendar src={callendar} />
        </AgeSelectionWrapper>
    )
}

export default AgeSelection