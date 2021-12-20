import { STUDENT_PROFILE } from "../action/actionTypes";

const initialState = {
  data: [],
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_PROFILE:
      return {
        ...state,
        data: [
          ...state.data,
          {
            user: action.payload.user,
          },
        ],
      };
    default:
      return state;
  }
};
