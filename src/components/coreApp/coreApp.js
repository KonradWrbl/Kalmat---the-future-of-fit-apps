import React, { useState } from 'react';
import { connect } from 'react-redux';
import BottomMenu from './BottomMenu';
import styled from 'styled-components'
import ButtonAppBar from './AppBar';

const CoreAppWrapper = styled.div`
    background-color: #F2F2F2;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
`

const CoreApp = () => {
    const [state, setState] = useState({

    })
    return(
        <CoreAppWrapper>
            <ButtonAppBar />
            <BottomMenu />
        </CoreAppWrapper>
    )
}

export default connect()(CoreApp)