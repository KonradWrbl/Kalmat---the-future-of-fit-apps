import React, { useState, useEffect, useRef } from 'react';
import { DietWrapper } from './style';
import AddMealButton from '../addMealButton/AddMealButton';
import { connect } from 'react-redux';
import AddMeal from '../addMeal/AddMeal';
import { addMealPopup } from '../../../../redux/actions/actionCreators'
import gsap from 'gsap'

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

    const wrapper = useRef(null);

    useEffect(() => {
        const elements = wrapper.current.children;

        gsap.set([...elements], {autoAlpha: 0});

        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

        tl.to(elements, {duration: 1, autoAlpha: 1, stagger: 0.1})

    }, [])

    return(

            <DietWrapper ref={ wrapper }>
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
