const initialState = {
    addMealPopup: false,
    newMeal: [],
}

const dietPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDMEAL':
            return {
                ...state,
                addMealPopup: action.payload,
            }
        case 'NEWMEAL' :
            return {
                ...state,
                newMeal: action.payload
            }
        default :
            return state
    }
}

export default dietPageReducer