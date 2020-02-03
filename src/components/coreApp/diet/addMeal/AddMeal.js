import React, { useState, useEffect } from 'react';
import { AddMealWrapper, AddMealPopup, BG, FormWrapper, StyledLabel, StyledInput, SubmitButton, SubmitButtonWrapper } from './style';
import { addMealPopup } from '../../../../redux/actions/actionCreators'
import { connect } from 'react-redux';
import Axios from 'axios';

const AddMeal = (props) => {
    const [newMeal, setNewMeal] = useState('')
    const [weight, setWeight] = useState(0)
    const [mealData, setMealData] = useState({})

    const API = `https://api.edamam.com/api/food-database/`

    const fetchData = () => {
        if(newMeal !== 0) {
                Axios.get(`${API}/parser?ingr=${newMeal}&app_id=721812f4&app_key=da38efe5cf3f25794cd0b75eac4a323a`)
            .then(response => {
                const data = response.data.hints[0].food
                console.log(response.data.hints[0].food)
                setMealData({
                    label: newMeal,
                    id: data.foodId,
                    kcal: data.nutrients.ENERC_KCAL,
                    fat: data.nutrients.FAT,
                })

            })
            .catch(error => console.log(error))
            .finally(response => {
                props.hidePopup();
            })
        } else {
            console.log('Brak danych');
        }
    }

    return(
        <>
            <AddMealWrapper >
                <AddMealPopup>
                    <FormWrapper>
                        <StyledLabel>
                            Dish name:
                            <StyledInput
                                type='text'
                                onChange={e => setNewMeal(e.target.value)}
                            ></StyledInput>
                        </StyledLabel>
                        <StyledLabel>
                            Estimated weight (g):
                            <StyledInput
                                type='number'
                                onChange={e => setWeight(e.target.value)}
                            ></StyledInput>
                        </StyledLabel>
                        <SubmitButtonWrapper>
                            <SubmitButton onClick={fetchData}>Add</SubmitButton>
                        </SubmitButtonWrapper>
                    </FormWrapper>
                </AddMealPopup>
                <BG onClick={props.hidePopup} />
            </AddMealWrapper>
        </>
    )
}

export default AddMeal