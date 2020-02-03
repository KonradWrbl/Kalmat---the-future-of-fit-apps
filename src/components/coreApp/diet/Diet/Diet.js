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

    const listOfMeals = props.mealsList.map(x => (
        <div>{[x.label,' ', x.kcal]}kcal</div>
    ))

    return(
        <DietWrapper>
            <AddMealButton showPopup={showAddMealPopup}/>
            {props.isVisible ? (<AddMeal hidePopup={hideAddMealPopup}/>) : ''}
            {listOfMeals}
        </DietWrapper>
    )
}

const mapStateToProps = state => {
    return({
        isVisible: state.dietPage.addMealPopup,
        mealsList: state.dietPage.newMeal,
    })
}

const mapDispatchToProps = {
    addMealPopup,
}

export default connect(mapStateToProps, mapDispatchToProps)(Diet)
