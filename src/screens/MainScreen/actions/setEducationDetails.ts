import { SET_EDUCATIONAL_DETAILS } from "../constants/constants";
import { IEducation } from "../types";

export const setEducationDetails = (details: IEducation) => ({
    type: SET_EDUCATIONAL_DETAILS,
    payload: details
});
