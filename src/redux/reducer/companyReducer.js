import { COMPANY } from "../action/actionTypes";

const initialState = {
  data: [],
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.payload.id,
            user: action.payload.user,
          },
        ],
      };
    default:
      return state;
  }
};
