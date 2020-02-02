import React from './node_modules/react';
import { AddMealWrapper, AddMealPopup } from './style';

const AddMeal = () => {


    const KEY = 'da38efe5cf3f25794cd0b75eac4a323a'
    const APPID = '721812f4'
    const URL = `https://api.edamam.com/api/food-database/parser?ingr=pizza&app_id=${APPID}&app_key=${KEY}`

    return(
        <AddMealWrapper>
            <AddMealPopup>

            </AddMealPopup>
        </AddMealWrapper>
    )
}