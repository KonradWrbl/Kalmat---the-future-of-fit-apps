import React, { useEffect } from 'react';
import Stepper from './Stepper'
import styled from 'styled-components'
import { connect } from 'react-redux'

const StartComponentWrapper = styled.div`
        background-color: #F2F2F2;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: flex-end;
        opacity: 1;
    `


const StartComponent = (props) => {

    const [introductionFinished, setfinished] = React.useState({finished: props.introductionFinished})

    const sendData = () => {
        props.dispatch({
            type: 'FINISH',
            payload: introductionFinished,
        })
    }

    const finish = () => {
        setfinished(true)
    }

    useEffect(() => {
        sendData();
      }, [introductionFinished]);

    return (
        <StartComponentWrapper>
            <Stepper finish={finish}/>
        </StartComponentWrapper>

    )
}

const mapStateToProps = (introductionFinished) => {
    return {
        introductionFinished: introductionFinished.finished,
    }
}

export default connect(mapStateToProps)(StartComponent)