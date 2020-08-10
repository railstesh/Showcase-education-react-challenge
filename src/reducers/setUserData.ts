import { SET_USER_DETAILS } from "../screens/MainScreen/constants/constants";
import { Users } from "../screens/MainScreen/types";

const setUserData = (state: Users, action: any) => ({
    ...state,
    name: action.payload,
});

export const setUserDetailsHandlers = {
    [SET_USER_DETAILS]: setUserData,
};
