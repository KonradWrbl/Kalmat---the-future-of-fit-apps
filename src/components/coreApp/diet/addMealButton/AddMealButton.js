import React, { useState, useEffect } from 'react';
import { StyledButton, ButtonWrapper } from './style';
import { addMealPopup } from '../../../../redux/actions/actionCreators'
import { connect } from 'react-redux';

const AddMealButton = (props) => {
    const [ isVisible, setVisible ] = useState(props.isVisible);

    useEffect(() => {
        props.addMealPopup(isVisible)
      }, [isVisible]);

    const showPopup = () => {
        setVisible(true)
    }

    return(
        <StyledButton onClick={showPopup}>Add new meal</StyledButton>
    )

}

const mapStateToProps = state => ({
    isVisible: state.dietPage.addMealPopup
})

const mapDispatchToProps = {
    addMealPopup,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMealButton)