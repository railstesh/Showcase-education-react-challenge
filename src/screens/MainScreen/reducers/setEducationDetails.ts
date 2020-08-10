import { SET_EDUCATIONAL_DETAILS } from "../constants/constants";
import { Education } from "../types";

const setEducationDetailsSuccess = (state: Education, action: any) => ({
    ...state,
    data: [
        ...state.data,
        action.payload
    ],
});

export const setEducationDetailsHandlers = {
    [SET_EDUCATIONAL_DETAILS]: setEducationDetailsSuccess,
};
