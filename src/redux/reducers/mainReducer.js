import { combineReducers } from "redux"
import profileDataReducer from "./profileDataReducer"

export default combineReducers({
    profileData: profileDataReducer,
})