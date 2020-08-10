import { createReducer } from "../common/reduxUtility";
import { Users } from "./../screens/MainScreen/types";
import { setUserDetailsHandlers } from "./setUserData";

const handlers = {
  ...setUserDetailsHandlers
};

const initialState: Users = {
  name: "",
};

const usersReducer = createReducer(initialState, handlers);

export default usersReducer;
