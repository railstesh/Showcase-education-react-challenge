import * as constants from "../constants/constants";
import { Education } from "../types";

const getUniversitiesStartDetails = (state: Education) => ({
    ...state,
});

const getUniversitiesSuccessDetails = (state: Education, action: any) => ({
    ...state,
    universities: action.payload,
});

const getUniversitiesFailureDetails = (state: Education, action: any) => ({
    ...state,
    errors: action.payload,
});

export const getUniversitiesHandlers = {
    [constants.GET_UNIVERSITIES_DETAILS_START]: getUniversitiesStartDetails,
    [constants.GET_UNIVERSITIES_DETAILS_SUCCESS]: getUniversitiesSuccessDetails,
    [constants.GET_UNIVERSITIES_DETAILS_FAILURE]: getUniversitiesFailureDetails,
};
