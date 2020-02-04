import React from "react";
import boy from '../../images/gender/boy.svg'
import girl from '../../images/gender/girl.svg'
import styled from 'styled-components'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'



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
    background-color: ${(props) => props.isChecked ? '#B7BDBD' : '' } !important;
`

const GenderSelectionImg = props => {

    const genderFoo = (gender=props.gender) => {
        switch(gender) {
            case 'female':
                return girl
            case 'male':
                return boy
            default:
                return girl
        }
    }

    const genderSelect = (gender=props.gender) => {
        switch(gender) {
            case 'female':
                return props.selectionFemale
            case 'male':
                return props.selectionMale
            default:
                return props.selectionMale
        }
    }


    const gender = genderFoo()

    const selectionFoo = genderSelect()

    return (
        <GenderImgWrapper>
            <MyButton onClick={selectionFoo} isChecked={props.gender === props.selectedGender ? true : false}>
                <GenderImg src={gender} />
            </MyButton>
            <GenderText>{props.gender==='male' ? 'mężczyzną' : 'kobietą'}</GenderText>
        </GenderImgWrapper>
    )
}

const mapStateToProps = state => {
    return{
        selectedGender: state.profileData.gender
    }
}



export default connect(mapStateToProps)(GenderSelectionImg)