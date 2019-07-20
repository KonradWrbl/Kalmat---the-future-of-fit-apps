import React, { useState } from "react";
import GenderSelectionImg from './GenderSelectionImg'
import { connect } from 'react-redux'
import styled from 'styled-components'

const GenderSelector = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const GenderSelectionWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const GenderText = styled.p`
    font-size: 2em;
    opacity: .3;
    font-weight: bold;
    padding: 0 20%;
`

const GenderSelection = () => {
    const [gender, setGender] = useState('none')

    return(
        <GenderSelectionWrapper>
            <GenderText>Jestem ...</GenderText>
            <GenderSelector>
                <GenderSelectionImg gender='boy'/>
                <GenderSelectionImg gender='girl'/>
            </GenderSelector>
        </GenderSelectionWrapper>

    )
}

export default GenderSelection