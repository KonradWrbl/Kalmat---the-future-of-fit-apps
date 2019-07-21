import React, { useState } from 'react';
import boy from '../../images/gender/boy.svg'
import girl from '../../images/gender/girl.svg'
import styled from 'styled-components'
import { Button } from '@material-ui/core';

const GenderImg = styled.img`
    width: 100%;
    border-radius: 50%;
`

const GenderImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const GenderText = styled.p`
    font-size: 1em;
    opacity: .3;
    font-weight: bold;
`

const MyButton = styled(Button)`
    border-radius: 50%;
`

const GenderSelectionImg = props => {
    const [gender, setGender] = useState('none')
    return (
        <GenderImgWrapper>
            <MyButton>
                <GenderImg src={props.gender === 'boy' ? boy : girl} />
            </MyButton>
            <GenderText>{props.gender === 'boy' ? 'mężczyzną' : 'kobietą'}</GenderText>
        </GenderImgWrapper>
    )
}

export default GenderSelectionImg