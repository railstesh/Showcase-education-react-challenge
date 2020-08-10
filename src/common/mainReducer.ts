import { combineReducers } from "redux";
import eduDetailsReducer from "../screens/MainScreen/reducers";
import { Education, Users } from "../screens/MainScreen/types";
import usersReducer from "../reducers";

export interface IRootState {
   readonly educations: Education
   readonly users: Users
}

export default combineReducers({
   educations: eduDetailsReducer,
   users: usersReducer
});

