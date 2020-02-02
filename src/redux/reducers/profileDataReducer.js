
const initialState = {
    gender: 'none',
    age: '',
    weight: '',
    growth: '',
    introductionFinished: false,
    bottomMenuValue: 0
  }

const profileDataReducer = (state = initialState, action) => {
    switch(action.type)  {
        case 'WEIGHT':
          return {
            ...state,
            weight: action.payload}
        case 'AGE':
          return {
            ...state,
            age: action.payload}
        case 'GROWTH':
          return {
            ...state,
            growth: action.payload}
        case 'GENDER':
          return {
            ...state,
            gender: action.payload}
        case 'FINISH':
          return {
            ...state,
            introductionFinished: action.payload}
        case 'BOTTOMMENU':
          return {
            ...state,
            bottomMenuValue: action.payload}
        default:
          return state;
    }
}

export default profileDataReducer