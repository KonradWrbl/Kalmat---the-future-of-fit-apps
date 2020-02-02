import React from 'react';
import { DietWrapper } from './style';
import AddMealButton from '../addMealButton/AddMealButton';
import { connect } from 'react-redux';
import AddMeal from '../addMeal/AddMeal';


const Diet = props => {
    return(
        <DietWrapper>
            <AddMealButton />
            {props.isVisible ? (<AddMeal />) : ''}
        </DietWrapper>
    )
}

const mapStateToProps = state => {
    return({
        isVisible: state.dietPage.addMealPopup,
    })
}

export default connect(mapStateToProps)(Diet)
