import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import userSlice from "./userSlice";
import postSlice from "./postSlice";

export const reducer = combineReducers({
  userDetails: userReducer,
  users: userSlice,
  posts: postReducer,
  postsS: postSlice,
});
