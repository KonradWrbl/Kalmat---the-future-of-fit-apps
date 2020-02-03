import React, { useState, useEffect } from 'react';
import { StyledButton, ButtonWrapper } from './style';
import { addMealPopup } from '../../../../redux/actions/actionCreators'
import { connect } from 'react-redux';

const AddMealButton = (props) => {
    return(
        <StyledButton onClick={props.showPopup}>Add new meal</StyledButton>
    )
}

export default AddMealButton