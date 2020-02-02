import React, { useState, useEffect } from 'react';
import { AddMealWrapper, AddMealPopup } from './style';
import { addMealPopup } from '../../../../redux/actions/actionCreators'
import { connect } from 'react-redux';

const AddMeal = (props) => {
    const KEY = 'da38efe5cf3f25794cd0b75eac4a323a'
    const APPID = '721812f4'
    const URL = `https://api.edamam.com/api/food-database/parser?ingr=pizza&app_id=${APPID}&app_key=${KEY}`

    const [isVisible, setVisible] = useState(props.isVisible)

    const closePopup = () => {
        setVisible(false)
        console.log('fdgs');
    }

    useEffect(() => {
        props.addMealPopup(isVisible)
    },[isVisible])

    return(
        <AddMealWrapper onClick={closePopup}>
            <AddMealPopup>

            </AddMealPopup>
        </AddMealWrapper>
    )
}

const mapStateToProps = state => ({
    isVisible: state.dietPage.addMealPopup
})

const mapDispatchToProps = {
    addMealPopup,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeal)