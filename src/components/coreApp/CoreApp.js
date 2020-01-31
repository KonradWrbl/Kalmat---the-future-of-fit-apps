import React, { useState } from 'react';
import { connect } from 'react-redux';
import BottomMenu from './BottomMenu';
import styled from 'styled-components'
import ButtonAppBar from './AppBar';
import Home from './home/Home';
import Menu from './Menu'

const CoreAppWrapper = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const CoreApp = (props) => {
    const [state, setState] = useState({

    })
    return(
        <CoreAppWrapper>
            {/* <ButtonAppBar /> */}
            <Menu />
            <Home />
            <BottomMenu />
        </CoreAppWrapper>
    )
}

// const mapStateToProps = state => {
//     return {
//         state: state.bottomMenuValue
//     }
// }

export default connect()(CoreApp)