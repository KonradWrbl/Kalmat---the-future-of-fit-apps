import React, { useEffect } from 'react';
import Stepper from './Stepper'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { sendFinish } from '../../redux/actions/actionCreators'

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

    // const sendData = () => {
    //     props.dispatch({
    //         type: 'FINISH',
    //         payload: introductionFinished,
    //     })
    // }

    const finish = () => {
        setfinished(true)
    }

    useEffect(() => {
        //sendData();
        props.sendFinish(introductionFinished)
      }, [introductionFinished]);

    return (
        <StartComponentWrapper>
            <Stepper finish={finish}/>
        </StartComponentWrapper>

    )
}

const mapStateToProps = state => (
    {introductionFinished: state.profileData.introductionFinished}
)

const mapDispatchToProps = {
    sendFinish,
}

export default connect(mapStateToProps, mapDispatchToProps)(StartComponent)