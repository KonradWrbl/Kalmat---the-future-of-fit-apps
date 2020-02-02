import React, { useState } from 'react';
import { connect } from 'react-redux';
import BottomMenu from './BottomMenu';
import styled from 'styled-components'
import ButtonAppBar from './AppBar';
import Home from './home/Home';
import Menu from './Menu'
import { Redirect, Route } from 'react-router-dom';
import Diet from './diet/Diet/Diet';

const CoreAppWrapper = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`

const CoreApp = (props) => {
    const [state, setState] = useState({

    })

    return(
        <CoreAppWrapper>
            <Route exact path='/core' component={Home} />
            <Route path='/core/training' component={Home} />
            <Route path='/core/diet' component={Diet} />
            {/* <ButtonAppBar /> */}
            <Menu />
            {/* {props.bottomMenuValue === 0 ? <Home /> : ' '} */}
            <BottomMenu />

        </CoreAppWrapper>
    )
}

const mapStateToProps = state => {
    return {
        bottomMenuValue: state.bottomMenuValue
    }
}

export default connect(mapStateToProps)(CoreApp)