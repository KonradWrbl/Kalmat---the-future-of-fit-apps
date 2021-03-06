import React, { useState, useEffect } from "react";
import GenderSelectionImg from './GenderSelectionImg'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { sendGender } from '../../redux/actions/actionCreators'


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

const StartMainText = styled.p`
    font-size: 2em;
    opacity: .3;
    font-weight: bold;
    padding: 0 20%;
`

const GenderSelection = (props) => {
    const [gender, setGender] = useState(`${props.gender}`)

    // const sendData = () => {
    //     props.dispatch({
    //         type: 'GENDER',
    //         payload: gender,
    //     })
    // }

    const genderSelectionMale = () => {
        console.log('male');
        setGender('male')
    }

    const genderSelectionFemale = () => {
        console.log('female');
        setGender('female')
    }

    useEffect(() => {
        //sendData();
        props.sendGender(gender)
      }, [gender]);



    return(
        <GenderSelectionWrapper>
            <StartMainText >Jestem ...</StartMainText>
            <GenderSelector >
                <GenderSelectionImg
                    gender='female'
                    selectionMale={genderSelectionMale}
                    selectionFemale={genderSelectionFemale}/>
                <GenderSelectionImg
                    gender='male'
                    selectionMale={genderSelectionMale}
                    selectionFemale={genderSelectionFemale}/>
            </GenderSelector>
        </GenderSelectionWrapper>

    )
}

const mapStateToProps = state => {
    return {
        gender: state.profileData.gender,
    }
}

const mapDispatchToProps ={
    sendGender,
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderSelection)