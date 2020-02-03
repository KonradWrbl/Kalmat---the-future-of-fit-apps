import React, { useState, useEffect } from 'react';
import { DietWrapper } from './style';
import AddMealButton from '../addMealButton/AddMealButton';
import { connect } from 'react-redux';
import AddMeal from '../addMeal/AddMeal';
import { addMealPopup } from '../../../../redux/actions/actionCreators'


const Diet = props => {

    const [isAddMealPopupVisible, setAddMealPopupVisible] = useState(props.isVisible)

    const showAddMealPopup = () => {
        setAddMealPopupVisible(true)
    }

    const hideAddMealPopup = () => {
        setAddMealPopupVisible(false)
    }

    useEffect(() => {
        props.addMealPopup(isAddMealPopupVisible)
    },[isAddMealPopupVisible])

    return(
        <DietWrapper>
            <AddMealButton showPopup={showAddMealPopup}/>
            {props.isVisible ? (<AddMeal hidePopup={hideAddMealPopup}/>) : ''}
        </DietWrapper>
    )
}

const mapStateToProps = state => {
    return({
        isVisible: state.dietPage.addMealPopup,
    })
}

const mapDispatchToProps = {
    addMealPopup,
}

export default connect(mapStateToProps, mapDispatchToProps)(Diet)
