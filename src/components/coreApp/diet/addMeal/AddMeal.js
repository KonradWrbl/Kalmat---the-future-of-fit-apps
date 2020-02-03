import React, { useState, useEffect } from 'react';
import { AddMealWrapper, AddMealPopup, BG, FormWrapper, StyledLabel, StyledInput, SubmitButton, SubmitButtonWrapper } from './style';
import { addMealPopup } from '../../../../redux/actions/actionCreators'
import { connect } from 'react-redux';

const AddMeal = (props) => {
    const KEY = 'da38efe5cf3f25794cd0b75eac4a323a'
    const APPID = '721812f4'
    const URL = `https://api.edamam.com/api/food-database/parser?ingr=pizza&app_id=${APPID}&app_key=${KEY}`


    return(
        <>
            <AddMealWrapper >
                <AddMealPopup>
                    <FormWrapper>
                        <StyledLabel>
                            Dish name:
                            <StyledInput type='text'></StyledInput>
                        </StyledLabel>
                        <StyledLabel>
                            Estimated weight (g):
                            <StyledInput type='number'></StyledInput>
                        </StyledLabel>
                        <SubmitButtonWrapper>
                            <SubmitButton>Add</SubmitButton>
                        </SubmitButtonWrapper>
                    </FormWrapper>
                </AddMealPopup>
                <BG onClick={props.hidePopup} />
            </AddMealWrapper>
        </>
    )
}

export default AddMeal