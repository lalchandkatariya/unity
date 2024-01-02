import { combineReducers } from "redux";
import subFormDetailsReducdr from "./subFormDetailsReducdr";
import userReducer from "./userReducer";

export const reducer = combineReducers({
    // userSubFormDetails:subFormDetailsReducdr,
    userDetails:userReducer
})