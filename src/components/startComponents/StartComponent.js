import React from 'react';
import Stepper from './Stepper'
import styled from 'styled-components'

const StartComponentWrapper = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-end;
`

const StartComponent = () => {
    return (
        <StartComponentWrapper>
            <Stepper />
        </StartComponentWrapper>

    )
}

export default StartComponent