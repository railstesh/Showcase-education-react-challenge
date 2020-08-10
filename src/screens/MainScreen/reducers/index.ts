import { createReducer } from "../../../common/reduxUtility";
import { getUniversitiesHandlers } from "./getUniversities";
import { setEducationDetailsHandlers } from "./setEducationDetails";
import { Education } from "../types";

const initialState: Education = {
  data: [],
  errors: {},
  universities: []
};

const handlers = {
  ...getUniversitiesHandlers,
  ...setEducationDetailsHandlers,
};

const eduDetailsReducer = createReducer(initialState, handlers);

export default eduDetailsReducer;
