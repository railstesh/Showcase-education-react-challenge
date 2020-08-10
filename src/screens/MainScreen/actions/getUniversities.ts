import axios from "axios";
import { GET_UNIVERSITIES_DETAILS_START, GET_UNIVERSITIES_DETAILS_SUCCESS, GET_UNIVERSITIES_DETAILS_FAILURE } from "../constants/constants";

export const getUniversities = (value: string) => {
    return function (dispatch: any): any {
        dispatch({ type: GET_UNIVERSITIES_DETAILS_START });
        axios.get(`http://universities.hipolabs.com/search?name=${value}`)
            .then(({ data }) => {
                dispatch({
                    type: GET_UNIVERSITIES_DETAILS_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_UNIVERSITIES_DETAILS_FAILURE,
                    payload: error
                });
            });
    };
}