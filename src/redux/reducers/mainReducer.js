import { combineReducers } from "redux"
import profileDataReducer from "./profileDataReducer"
import dietPageReducer from "./dietPageReducer"

export default combineReducers({
    profileData: profileDataReducer,
    dietPage: dietPageReducer
})