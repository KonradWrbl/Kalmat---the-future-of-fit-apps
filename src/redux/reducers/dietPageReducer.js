const initialState = {
    addMealPopup: false,
}

const dietPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDMEAL':
            return {
                ...state,
                addMealPopup: action.payload,
            }
        default :
            return state
    }
}

export default dietPageReducer