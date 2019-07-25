import React from "react";
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
    border-radius: 50% !important;
`

const GenderSelectionImg = props => {




    return (
        <GenderImgWrapper>
            <MyButton>
                <GenderImg src={props.girl ? boy : girl} />
            </MyButton>
            <GenderText>{props.girl ? 'mężczyzną' : 'kobietą'}</GenderText>
        </GenderImgWrapper>
    )
}


export default GenderSelectionImg